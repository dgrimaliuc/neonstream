import { memo, useCallback } from 'react';
import { useNavigateToContent, useSingleContentLoader } from '../../hooks';
import { getFilePathReverseOrNull, getPoster } from '../../utils';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { AnimatedContainer } from './animated-container';
import './custom-border-neon.css';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
import './single-promo-card-neon.css';
import SinglePromoCardWrapper from './single-promo-card-wrapper';
import './single-promo-card.css';
import { useRendingImage } from '../../hooks/useRendingImage';

const SinglePromoCardContainer = memo(
  ({
    id,
    mediaType,
    secondImageIndex,
    animatedTopClassName,
    animatedBottomClassName,
    imageClassName,
  }) => {
    const { data, loading, error } = useSingleContentLoader(id, mediaType);
    const to = useNavigateToContent(mediaType, id);

    const { img: top } = useRendingImage(
      useCallback(setImage => data && setImage(getPoster(data.poster_path)), [data]),
    );

    const { img: bottom } = useRendingImage(
      useCallback(
        setImage => {
          if (data) {
            const filePath = getFilePathReverseOrNull(data.images.posters, secondImageIndex);
            setImage(getPoster(filePath));
          }
        },
        [data, secondImageIndex],
      ),
    );

    // While the data is loading, we don't want to render the component, so set placeholder
    if (error) return null;

    return (
      <>
        <LazyLoadComponent>
          {!loading && (
            <SinglePromoCardWrapper
              id={id}
              mediaType={mediaType}
              to={`/${mediaType}/${id}`}
              toWatch={to}
              title={data?.title || data?.name}
              description={data?.overview}
            >
              <AnimatedContainer
                topClassName={animatedTopClassName}
                bottomClassName={animatedBottomClassName}
              />

              <SingleCardsImageWrapper
                to={`/${mediaType}/${id}`}
                topImage={top}
                bottomImage={bottom}
                className={imageClassName}
              />
            </SinglePromoCardWrapper>
          )}
        </LazyLoadComponent>
      </>
    );
  },
);

export default SinglePromoCardContainer;

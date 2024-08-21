import './custom-border-neon.css';
import './single-promo-card-neon.css';
import './single-promo-card.css';

import { memo, useCallback } from 'react';
import { useNavigateToContent, useSingleContentLoader } from '../../hooks';
import { getFilePathReverseOrNull, getPoster } from '../../utils';
import { AnimatedContainer } from './animated-container';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
import SinglePromoCardWrapper from './single-promo-card-wrapper';
import { useRendingImage } from '../../hooks/useRendingImage';
import PlaceholderSinglePromoCard from './placeholder-single-promo-card';

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
    const navigate = useNavigateToContent(mediaType, id);

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

    if (loading) {
      return (
        <PlaceholderSinglePromoCard
          topClassName={animatedTopClassName}
          bottomClassName={animatedBottomClassName}
        />
      );
    }
    if (error) return null;

    return (
      <SinglePromoCardWrapper
        id={id}
        mediaType={mediaType}
        to={`/${mediaType}/${id}`}
        onWatchClick={navigate}
        title={data?.title || data?.name}
        description={data?.overview}
        data={data}
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
    );
  },
);

export default SinglePromoCardContainer;

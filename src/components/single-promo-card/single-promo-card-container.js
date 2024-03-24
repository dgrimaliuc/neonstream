import { memo } from 'react';
import { useSingleContentLoader } from '../../hooks';
import { getFilePathReverseOrNull, getPoster } from '../../utils';
import { AnimatedContainer } from './animated-container';
import './custom-border-neon.css';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
import './single-promo-card-neon.css';
import SinglePromoCardWrapper from './single-promo-card-wrapper';
import './single-promo-card.css';

const SinglePromoCardContainer = memo(
  ({
    id,
    mediaType,
    secondImageIndex,
    animatedTopClassName,
    animatedBottomClassName,
    imageClassName,
  }) => {
    const { data } = useSingleContentLoader(id, mediaType);

    if (!data) return null;

    return (
      <SinglePromoCardWrapper
        title={data.title || data.name}
        description={data.overview}
      >
        <AnimatedContainer
          topClassName={animatedTopClassName}
          bottomClassName={animatedBottomClassName}
        />
        <SingleCardsImageWrapper
          to={`/${mediaType}/${id}`}
          topImage={getPoster(data.poster_path)}
          bottomImage={getPoster(
            getFilePathReverseOrNull(data.images?.posters, secondImageIndex)
          )}
          className={imageClassName}
        />
      </SinglePromoCardWrapper>
    );
  }
);

export default SinglePromoCardContainer;

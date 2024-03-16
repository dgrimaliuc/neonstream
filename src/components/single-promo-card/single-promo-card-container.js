import { useImageProps, useSingleContentLoader } from '../../hooks';
import { getFilePathOrNull, getPoster } from '../../utils';
import { AnimatedContainer } from './animated-container';
import './custom-border-neon.css';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
import './single-promo-card-neon.css';
import SinglePromoCardWrapper from './single-promo-card-wrapper';
import './single-promo-card.css';

export default function SinglePromoCardContainer({
  id,
  mediaType,
  secondImageIndex = 1,
  animatedTopClassName,
  animatedBottomClassName,
  imageClassName,
}) {
  const extraParams = useImageProps();

  const { data } = useSingleContentLoader(id, mediaType, extraParams);

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
          getFilePathOrNull(data.images?.posters, secondImageIndex)
        )}
        className={imageClassName}
      />
    </SinglePromoCardWrapper>
  );
}

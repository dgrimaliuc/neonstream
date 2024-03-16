import SinglePromoCardContainer from './single-promo-card-container';
import './single-promo-card-neon.css';
import './single-promo-card.css';

export default function SinglePromoCardNeon({
  id,
  mediaType,
  secondImageIndex,
}) {
  return (
    <SinglePromoCardContainer
      id={id}
      mediaType={mediaType}
      secondImageIndex={secondImageIndex}
      animatedTopClassName='border-box-neon'
      animatedBottomClassName='border-box-neon-reverse'
      imageClassName='single-card-image-neon'
    />
  );
}

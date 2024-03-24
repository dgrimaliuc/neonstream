import { memo } from 'react';
import SinglePromoCardContainer from './single-promo-card-container';
import './single-promo-card-neon.css';
import './single-promo-card.css';

const SinglePromoCardNeon = memo(({ id, mediaType, secondImageIndex = 0 }) => {
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
});

export default SinglePromoCardNeon;

import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

import SinglePromoCardContainer from './single-promo-card-container';
// import { useImagesLoader, useSingleContentLoader } from '../../hooks';
// import { useMemo } from 'react';

export default function SinglePromoCardViolet({
  id,
  mediaType,
  secondImageIndex = 0,
}) {
  return (
    <SinglePromoCardContainer
      id={id}
      mediaType={mediaType}
      secondImageIndex={secondImageIndex}
      animatedTopClassName='border-box-violet'
      animatedBottomClassName='border-box-violet-reverse'
      imageClassName='single-card-image-violet'
    />
  );
}

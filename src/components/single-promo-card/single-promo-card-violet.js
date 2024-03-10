import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

import SinglePromoCardWrapper from './single-promo-card-wrapper';
import { AnimatedContainer } from './animated-container';
import SingleCardsImageWrapper from './single-cards-image-wrapper';

export default function SinglePromoCardViolet() {
  return (
    <SinglePromoCardWrapper>
      <AnimatedContainer
        topClassName='border-box-violet'
        bottomClassName='border-box-violet-reverse'
      />
      <SingleCardsImageWrapper
        topImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        bottomImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        className='single-card-image-violet'
      />
    </SinglePromoCardWrapper>
  );
}

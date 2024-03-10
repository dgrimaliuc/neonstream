import { AnimatedContainer } from './animated-container';
import './custom-border-neon.css';
import SingleCardsImageWrapper from './single-cards-image-wrapper';
import './single-promo-card-neon.css';
import SinglePromoCardWrapper from './single-promo-card-wrapper';
import './single-promo-card.css';

export default function SinglePromoCardNeon() {
  return (
    <SinglePromoCardWrapper>
      <AnimatedContainer
        topClassName='border-box-neon'
        bottomClassName='border-box-neon-reverse'
      />
      <SingleCardsImageWrapper
        topImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        bottomImage='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
        className='single-card-image-neon'
      />
    </SinglePromoCardWrapper>
  );
}

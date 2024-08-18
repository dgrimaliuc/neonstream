import './custom-border-neon.css';
import './single-promo-card-neon.css';
import './single-promo-card.css';

import { ActionsPlaceholder } from '../actions';
import { AnimatedContainer } from './animated-container';

export default function PlaceholderSinglePromoCard({ topClassName, bottomClassName }) {
  return (
    <>
      <div className='single-promo-card-wrapper'>
        <div className='single-promo-card-container'>
          <div className='single-promo-card'>
            <div className='background-images-container'>
              <AnimatedContainer topClassName={topClassName} bottomClassName={bottomClassName} />
              <div className='single-card-img-wrapper'>
                <div className='image-left placeholder' />
                <div className='image-right placeholder' />
              </div>
            </div>
            <div className='content-card-info placeholder'>
              <div className='single-show-card-title placeholder' />
              <div className='single-show-card-description placeholder' />
              <ActionsPlaceholder addToList={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import './single-card.css';

import { ActionsPlaceholder } from '../actions';
import PlaceholderGenres from '../genres/placeholder-genres';

export default function PlaceholderSingleCard() {
  return (
    <div className='single-card-wrapper'>
      <div className='single-card'>
        <div className='single-card-container'>
          <div className='blur_back single-card-image placeholder' alt='Single card' />
          <div className='single-card-info-wrapper'>
            <div className='single-card-header'>
              <div>
                <div className='single-card-poster placeholder' alt='Single card poster' />
              </div>
              <div className='single-card-info-column'>
                <div>
                  <div className='single-card-title placeholder' />
                </div>
                <div className='average-card-ratings placeholder' />
                <PlaceholderGenres count={2} />
              </div>
            </div>

            <div className='single-card-description placeholder' />
            <ActionsPlaceholder addToList={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

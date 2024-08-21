import { ActionsContainer } from '../actions';
import './single-promo-card.css';

export default function SinglePromoCardWrapper({
  to = '/',
  children,
  title = '',
  description = '',
  onWatchClick,
  data,
}) {
  return (
    <div className='single-promo-card-wrapper'>
      <div className='single-promo-card-container'>
        <div className='single-promo-card'>
          <div className='background-images-container'>{children}</div>
          <div className='content-card-info'>
            <a href={to}>
              <h2 className='single-show-card-title'>{title}</h2>
            </a>
            <div className='single-show-card-description'>{description}</div>

            <ActionsContainer onWatchClick={onWatchClick} addToList={false} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

import { ActionsContainer } from '../actions';
import './single-promo-card.css';

export default function SinglePromoCardWrapper({
  to = '/',
  toWatch,
  children,
  title = '',
  description = '',
  mediaType,
  id,
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
            <div className='hero-card-description'>{description}</div>

            <ActionsContainer to={toWatch} addToList={false} media={mediaType} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

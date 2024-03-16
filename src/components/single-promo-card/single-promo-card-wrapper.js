import ActionsContainer from '../actions/actionsContainer';
import './single-promo-card.css';

export default function SinglePromoCardWrapper({
  children,
  title,
  description,
}) {
  return (
    <div className='single-promo-card-wrapper'>
      <div className='single-promo-card-container'>
        <div className='single-promo-card'>
          <div className='background-images-container'>{children}</div>
          <div className='content-card-info'>
            <a href='/'>
              <h2 className='single-show-card-title'>{title}</h2>
            </a>
            <div className='hero-card-description'>{description}</div>

            <ActionsContainer addToList={false} wlMinimal />
          </div>
        </div>
      </div>
    </div>
  );
}

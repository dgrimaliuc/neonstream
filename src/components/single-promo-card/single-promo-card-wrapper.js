import ActionsContainer from '../actions/actionsContainer';
// import './custom-border-violet.css';
// import './single-promo-card-violet.css';
import './single-promo-card.css';

export default function SinglePromoCardWrapper({ children = null }) {
  return (
    <div className='single-promo-card-wrapper'>
      <div className='single-promo-card-container'>
        <div className='single-promo-card'>
          <div className='background-images-container'>{children}</div>
          <div className='content-card-info'>
            <a href='/'>
              <h2 className='single-show-card-title'>The Big Bang Theory</h2>
            </a>
            <div className='hero-card-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio numquam laborum molestiae nesciunt voluptate minus
              praesentium ipsa enim, unde eaque accusamus architecto, deserunt
              pariatur! Natus deleniti fugit odio ratione inventore?
            </div>

            <ActionsContainer addToList={false} wlMinimal />
          </div>
        </div>
      </div>
    </div>
  );
}

import ActionsContainer from '../actions/actionsContainer';
import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

export default function SinglePromoCardViolet() {
  return (
    <div className='single-promo-card-wrapper'>
      <div className='single-promo-card-container'>
        <div className='single-promo-card'>
          <div className='background-images-container'>
            <div className='animated-boxes'>
              <div className='space-box border-box-violet top-place'></div>
              <div className='space-box border-box-violet-reverse bottom-place'></div>
            </div>
            <div className='single-card-img-wrapper'>
              <div>
                <picture>
                  <img
                    className='single-card-image-violet'
                    src='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
                    alt=' The Big Bang Theory Poster'
                  />
                </picture>
              </div>
              <div className='image-right'>
                <picture>
                  <img
                    className='single-card-image-violet'
                    src='https://img.rgstatic.com/content/show/44274ca8-ea80-4e4d-9e0d-eb7c390b4580/poster-342.jpg'
                    alt=' The Big Bang Theory Poster'
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className='content-card-info'>
            <a href='#'>
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

import './hero-carousel-placeholder.css';
import classes from '../hero-card/hero-card.module.css';
import { ActionsPlaceholder } from '../../actions';
import PlaceholderHeroArrowsWrapper from '../components/placeholderhero-arrows-wrapper';
import HeroCardsWrapper from '../hero-cards-wrapper';
import PlaceholderCarouselPaginationContainer from '../pagination/placeholder-carousel-pagination-container';

export default function HeroCarouselPlaceholder() {
  return (
    <div>
      <div className='hero-carousel-wrapper'>
        <PlaceholderHeroArrowsWrapper>
          <HeroCardsWrapper>
            <div className={classes['hero-card-wrapper']}>
              <div className={classes['hero-card-container']}>
                <div className={classes['hero-card-poster']}>
                  <picture className={classes['hero-card-background']}>
                    <div className={classes['hero-card-picture']} />
                  </picture>
                </div>
                <div className={classes['hero-card-info']}>
                  <div className={`${classes['title']} ${classes.placeholder}`} />
                  <div className={`${classes.description} ${classes.placeholder}`} />
                  <ActionsPlaceholder addToList={false} />
                </div>
              </div>
            </div>
            <PlaceholderCarouselPaginationContainer />
          </HeroCardsWrapper>
        </PlaceholderHeroArrowsWrapper>
      </div>
    </div>
  );
}

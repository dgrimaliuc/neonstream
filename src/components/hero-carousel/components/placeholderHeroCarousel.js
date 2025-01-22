// import './hero-carousel-placeholder.css';
import classes from '../hero-card/hero-card.module.css';
import styles from '../styles/index.module.scss';
import { ActionsPlaceholder } from '../../actions';
import PlaceholderHeroArrowsWrapper from './placeholder-hero-arrows-wrapper';
import HeroCardsWrapper from './hero-cards-wrapper';
import PlaceholderCarouselPaginationContainer from '../pagination/placeholder-carousel-pagination-container';
import { combineClasses } from 'utils';

export default function HeroCarouselPlaceholder() {
  return (
    <div>
      <div className={styles['hero-carousel-wrapper']}>
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
                  <div className={combineClasses(classes['title'], classes.placeholder)} />
                  <div className={combineClasses(classes.description, classes.placeholder)} />
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

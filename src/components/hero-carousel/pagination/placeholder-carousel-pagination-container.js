import classes from './hero-carousel-pagination.module.css';
import PlaceholderHeroCarouselTab from './placeholder-hero-carousel-tab';

export default function PlaceholderCarouselPaginationContainer() {
  return (
    <div className={classes['hero-carousel-pagination-wrapper']}>
      {Array.from({ length: 10 }).map((_, i) => (
        <PlaceholderHeroCarouselTab key={i} index={i} />
      ))}
    </div>
  );
}

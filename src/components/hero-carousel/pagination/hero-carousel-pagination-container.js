import classes from './hero-carousel-pagination.module.css';
import HeroCarouselTab from './hero-carousel-tab';

export default function HeroCarouselPagination({ total, selected, onClick }) {
  if (total <= 0) {
    return null;
  }

  return (
    <div className={classes['hero-carousel-pagination-wrapper']}>
      {Array.from({ length: total }).map((_, i) => (
        <HeroCarouselTab
          key={i}
          active={i === selected}
          onClick={onClick}
          index={i}
        />
      ))}
    </div>
  );
}

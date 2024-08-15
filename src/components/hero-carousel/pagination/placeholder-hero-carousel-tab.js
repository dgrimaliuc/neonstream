import styles from './hero-carousel-pagination.module.css';

export default function PlaceholderHeroCarouselTab() {
  return (
    <div className={`${styles['hero-carousel__page']} ${styles.placeholder}`}>
      <div className={`${styles['hero-carousel__page-pill']} ${styles.placeholder}`} />
    </div>
  );
}

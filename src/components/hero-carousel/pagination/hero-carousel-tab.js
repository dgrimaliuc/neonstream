import { useEffect } from 'react';
import { useClasses } from '../../../hooks';
import styles from './hero-carousel-pagination.module.css';

export default function HeroCarouselTab({ active, onClick, index }) {
  const { c: tabClass, addClass, setInitial } = useClasses(styles['hero-carousel__page']);

  useEffect(() => {
    if (active) {
      addClass(styles['page-is-active']);
    } else {
      setInitial();
    }
  }, [active, addClass, setInitial]);

  return (
    <button id={`'hero-tab-'` + index} className={tabClass} onClick={onClick.bind(null, index)}>
      <div className={styles['hero-carousel__page-pill']}>
        <span className={styles['hero-carousel__page-loader']} />
      </div>
    </button>
  );
}

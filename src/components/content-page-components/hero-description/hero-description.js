import { useClasses } from '../../../hooks';
import styles from './hero-description.module.css';

export default function HeroDescription({ description = 'Undefined' }) {
  const {
    c: heroDescription,
    setInitial,
    addClass,
  } = useClasses(styles['description-wrapper']);

  function expandHandler() {
    heroDescription.includes('expanded')
      ? setInitial()
      : addClass(styles['expanded']);
  }

  return (
    <div className={heroDescription} onClick={expandHandler}>
      <h4 className={styles['description-title']}>Overview</h4>
      <div className={styles['description-gradient']}>
        <div className={styles['description-container']}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

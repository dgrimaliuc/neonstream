import { useClasses } from '../../../hooks';
import styles from './hero-description.module.css';

export default function HeroDescription({ description = 'Undefined' }) {
  const { classes, setInitial, addClass } = useClasses(
    styles['description-wrapper']
  );

  function expandHandler() {
    classes.includes('expanded') ? setInitial() : addClass(styles['expanded']);
  }

  return (
    <div className={classes} onClick={expandHandler}>
      <div className={styles['description-gradient']}>
        <div className={styles['description-container']}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

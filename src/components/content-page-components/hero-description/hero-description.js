import styles from './hero-description.module.css';

export default function HeroDescription({ description = 'Description not present' }) {
  return (
    <div className={styles['description-container']}>
      <p>{description}</p>
    </div>
  );
}

import { useMemo } from 'react';
import styles from './tags.module.css';

export default function PlaceholderGenres({ count }) {
  const genres = useMemo(() => new Array(count).fill(0), [count]);

  return (
    <div className={styles.tags}>
      {genres.map((_, index) => (
        <span key={index} className={`${styles.tag} ${styles.placeholder}`} />
      ))}
    </div>
  );
}

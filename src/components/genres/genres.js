import styles from './tags.module.css';

export default function Genres({ genres = [] }) {
  let t = genres.map((tag) => tag.name);
  if (genres.length === 0) {
    t = ['Undefined'];
  }
  return (
    <div className={styles.tags}>
      {t.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

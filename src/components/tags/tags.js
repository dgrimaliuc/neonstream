import styles from './tags.module.css';

export default function Tags({ tags = [] }) {
  let t = tags.map((tag) => tag.name);
  if (tags.length === 0) {
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

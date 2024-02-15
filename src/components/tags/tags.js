import styles from './tags.module.css';

export default function Tags() {
  const tags = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Shounen',
    'Super Power',
  ];
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag.trim()}
        </span>
      ))}
    </div>
  );
}

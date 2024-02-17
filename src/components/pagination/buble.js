import styles from './pagination.module.css';

export default function Buble({ isSelected, title, onClick }) {
  const classes = `${styles['pagination-bubble']} ${
    isSelected ? styles.active : ''
  }`.trim();

  return (
    <div className={classes} onClick={onClick}>
      <span className={styles['page-number']}>{title}</span>
    </div>
  );
}

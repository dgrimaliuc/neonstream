import styles from './seasons.module.css';

export default function Season({ isSelected, title, onClick }) {
  const classes = `${styles.season} ${
    isSelected ? styles.selected : ''
  }`.trim();

  return (
    <div>
      <button className={classes} onClick={onClick}>
        <span>{title}</span>
      </button>
    </div>
  );
}

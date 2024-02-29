import styles from './seasons.module.css';

export default function Season({
  isSelected,
  seasonNumber,
  seasonTitle,
  onClick,
  disabled = false,
}) {
  const classes = `${styles.season} ${
    isSelected ? styles.selected : ''
  }`.trim();

  return (
    <div>
      <button className={classes} onClick={onClick} disabled={disabled}>
        <span>{seasonTitle}</span>
      </button>
    </div>
  );
}

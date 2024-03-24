import styles from './seasons.module.css';

export default function Season({
  isSelected,
  seasonTitle,
  onClick,
  className,
  disabled = false,
}) {
  const classes = `${styles.season} ${isSelected ? styles.selected : ''} ${
    className ? className : ''
  }`.trim();

  return (
    <div>
      <button className={classes} onClick={onClick} disabled={disabled}>
        <span>{seasonTitle}</span>
      </button>
    </div>
  );
}

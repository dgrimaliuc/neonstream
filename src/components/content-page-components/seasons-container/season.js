import styles from './seasons.module.css';

export default function Season({ isSelected, seasonNumber, onClick }) {
  const classes = `${styles.season} ${
    isSelected ? styles.selected : ''
  }`.trim();

  return (
    <div>
      <button className={classes} onClick={onClick}>
        <span>Season {seasonNumber}</span>
      </button>
    </div>
  );
}

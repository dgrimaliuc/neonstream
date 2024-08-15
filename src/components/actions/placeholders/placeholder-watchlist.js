import styles from '../actions.module.css';
import placeholder from './placeholder-actions.module.css';

export default function PlaceholderWatchlist({ wlMinimal }) {
  return (
    <button
      className={`${styles['watchlist-button']} ${styles['default-button']} ${placeholder.placeholder}`}
    >
      <div className={wlMinimal ? styles.wl_container : ''} />
    </button>
  );
}

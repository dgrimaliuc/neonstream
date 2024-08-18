import styles from '../actions.module.css';
import PlaceholderWatchNow from './placeholder-watch-now';
import PlaceholderWatchlist from './placeholder-watchlist';

export default function ActionsPlaceholder({ wlMinimal }) {
  return (
    <div className={styles.actions}>
      <PlaceholderWatchNow />
      <PlaceholderWatchlist wlMinimal={wlMinimal} />

      {/* {addToList && (
        <button className={styles['default-button']}>
          <span className='fa-bars'></span>
          Add to List
        </button>
      )} */}
    </div>
  );
}

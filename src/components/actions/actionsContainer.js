import styles from './actions.module.css';
import WatchlistButton from './watchlist-button';
import WatchNowButton from './watch-now-button';

export default function ActionsContainer({
  onWatchClick,
  addToList = true,
  wlMinimal = false,
  data = {},
}) {
  return (
    <div className={styles.actions}>
      <WatchNowButton onClick={onWatchClick} data={data} />
      {<WatchlistButton wlMinimal={wlMinimal} data={data} />}
      {addToList && (
        <button className={styles['default-button']}>
          <span className='fa-bars'></span>
          Add to List
        </button>
      )}
    </div>
  );
}

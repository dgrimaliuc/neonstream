import styles from './actions.module.css';

export default function ActionsContainer({
  addToList = true,
  wlMinimal = false,
  onWatchClick,
}) {
  return (
    <div className={styles.actions}>
      <div>
        <button className={styles['watch-now-btn']} onClick={onWatchClick}>
          {/* <a href={to}> */}
          <span className='fa-play'></span>
          Watch Now
          {/* </a> */}
        </button>
      </div>
      {wlMinimal ? (
        <button className='wl-button'>
          <span className='fa-bookmark'></span>
        </button>
      ) : (
        <button className={styles['default-button']}>
          <span className='fa-plus'></span>
          Add to Watchlist
        </button>
      )}
      {addToList && (
        <button className={styles['default-button']}>
          <span className='fa-bars'></span>
          Add to List
        </button>
      )}
    </div>
  );
}

import styles from './actions.module.css';

export default function WatchNowButton({ onWatchClick, onWatchClickDefault }) {
  return (
    <div>
      <button className={styles['watch-now-btn']} onClick={onWatchClick ?? onWatchClickDefault}>
        <span className='fa-play' />
        Watch Now
      </button>
    </div>
  );
}

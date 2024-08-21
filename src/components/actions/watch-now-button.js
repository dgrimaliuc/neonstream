import styles from './actions.module.css';

export default function WatchNowButton({ onClick }) {
  return (
    <div>
      <button className={styles['watch-now-btn']} onClick={onClick}>
        <span className='fa-play' />
        Watch Now
      </button>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import styles from './actions.module.css';

export default function ActionsContainer({ to, onWatchClick, addToList = true, wlMinimal = false }) {
  const navigate = useNavigate();

  const onWatchClickDefault = () => {
    navigate(to);
  };

  return (
    <div className={styles.actions}>
      <div>
        <button className={styles['watch-now-btn']} onClick={onWatchClick ?? onWatchClickDefault}>
          <span className='fa-play'></span>
          Watch Now
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

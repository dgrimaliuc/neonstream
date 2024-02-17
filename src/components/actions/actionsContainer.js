import styles from './actions.module.css';
import { Link } from 'react-router-dom';

export default function ActionsContainer({ addToList = true }) {
  return (
    <div className={styles.actions}>
      <div>
        <button className={styles['watch-now-btn']}>
          <Link to='/watch'>
            <span className='fa-play'></span>
            Watch Now
          </Link>
        </button>
      </div>
      <button className={styles['default-button']}>
        <span className='fa-plus'></span>
        Add to Watchlist
      </button>
      {addToList && (
        <button className={styles['default-button']}>
          <span className='fa-bars'></span>
          Add to List
        </button>
      )}
    </div>
  );
}

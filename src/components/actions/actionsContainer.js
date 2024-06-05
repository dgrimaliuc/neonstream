import styles from './actions.module.css';
import { useNavigate } from 'react-router-dom';
import WatchlistButton from './watchlist-button';

export default function ActionsContainer({
  to,
  onWatchClick,
  addToList = true,
  wlMinimal = false,
  media,
  id,
}) {
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
      {<WatchlistButton wlMinimal={wlMinimal} media={media} id={id} />}
      {addToList && (
        <button className={styles['default-button']}>
          <span className='fa-bars'></span>
          Add to List
        </button>
      )}
    </div>
  );
}

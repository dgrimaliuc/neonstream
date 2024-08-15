import styles from './actions.module.css';
import { useNavigate } from 'react-router-dom';
import WatchlistButton from './watchlist-button';
import WatchNowButton from './watch-now-button';

export default function ActionsContainer({
  to,
  onWatchClick,
  addToList = true,
  wlMinimal = false,
  data = {},
}) {
  const navigate = useNavigate();
  const onWatchClickDefault = () => {
    navigate(to);
  };

  return (
    <div className={styles.actions}>
      <WatchNowButton onWatchClick={onWatchClick} onWatchClickDefault={onWatchClickDefault} />
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

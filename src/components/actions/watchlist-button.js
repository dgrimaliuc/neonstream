import styles from './actions.module.css';
import { useWatchlist } from '../../hooks';
import { useClasses } from '../../hooks';
import { useCallback, useEffect, useRef, useState } from 'react';

const wlStates = {
  true: 'Remove from Watchlist',
  false: 'Add to Watchlist',
};

export default function WatchlistButton({ wlMinimal, media, id }) {
  const { add, remove, isInWatchlist } = useWatchlist({ media, id });
  const [buttonText, setButtonText] = useState(wlStates[isInWatchlist]);

  const wlRef = useRef(null);

  const {
    c: wlClasses,
    addClass,
    removeClass,
  } = useClasses(styles['watchlist-button'], styles['default-button']);

  const wlClickHandler = useCallback(() => {
    if (!media || !id) return;
    if (isInWatchlist) {
      remove();
    } else {
      add();
    }
  }, [media, id, isInWatchlist, remove, add]);

  useEffect(() => {
    if (isInWatchlist) {
      addClass(styles.active);
    } else {
      removeClass(styles.active);
    }
  }, [addClass, isInWatchlist, removeClass]);

  useEffect(() => {
    if (isInWatchlist) {
      addClass(styles.active);
    }
    setButtonText(wlStates[isInWatchlist]);
  }, [addClass, isInWatchlist]);

  return (
    <button ref={wlRef} className={wlClasses} onClick={wlClickHandler}>
      {wlMinimal ? (
        <div>
          <span className='fa-bookmark'></span>
        </div>
      ) : (
        <div className={styles.wl_container}>
          <span className='fa-bookmark'></span>
          {buttonText}
        </div>
      )}
    </button>
  );
}

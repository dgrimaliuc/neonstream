import styles from './actions.module.css';
import { useWatchlist } from '../../hooks';
import { useClasses } from '../../hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const wlStates = {
  true: { text: 'Remove from Watchlist', dataT: 'in-watchlist' },
  false: {
    text: 'Add to Watchlist',
    dataT: 'not-in-watchlist',
  },
};

export default function WatchlistButton({ wlMinimal, data }) {
  const { media_type, id } = data || {};
  const { add, remove, isInWatchlist } = useWatchlist({ media: media_type, id });
  const { text, dataT } = useMemo(() => wlStates[isInWatchlist], [isInWatchlist]);
  const [buttonText, setButtonText] = useState(text);

  const wlRef = useRef(null);

  const {
    c: wlClasses,
    addClass,
    removeClass,
  } = useClasses(styles['watchlist-button'], styles['default-button']);

  const wlClickHandler = useCallback(() => {
    if (!media_type || !id) return;
    if (isInWatchlist) {
      remove();
    } else {
      add(data);
    }
  }, [media_type, id, isInWatchlist, remove, add, data]);

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
    setButtonText(text);
  }, [addClass, isInWatchlist, text]);

  return (
    <button ref={wlRef} className={wlClasses} onClick={wlClickHandler} data-t={dataT}>
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

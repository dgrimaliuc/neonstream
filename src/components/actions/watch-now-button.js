import { useSelector } from 'react-redux';
import styles from './actions.module.css';
import { historyContent, upNextContent } from '../../store';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

export default function WatchNowButton({ onClick, data }) {
  const upNext = useSelector(upNextContent);
  const history = useSelector(historyContent);
  const [text, setText] = useState('Watch Now');

  useEffect(() => {
    if (
      (!isEmpty(upNext) && upNext[data.media_type + `-${data.id}`]) ||
      (!isEmpty(history) &&
        history?.map[data.media_type + `-${data.id}`] &&
        !history?.map[data.media_type + `-${data.id}`]?.isFullyWatched)
    ) {
      setText('Continue Watching');
    } else if (!isEmpty(history) && history?.map[data.media_type + `-${data.id}`]?.isFullyWatched) {
      setText('Watch Again');
    } else {
      setText('Watch Now');
    }
  }, [upNext, data, history]);

  return (
    <div>
      <button className={styles['watch-now-btn']} onClick={onClick}>
        <span className='fa-play' />
        {text}
      </button>
    </div>
  );
}

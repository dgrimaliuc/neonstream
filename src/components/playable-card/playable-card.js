import classes from './episode-card.module.css';

import { PlayableThumbnail } from '../playable-thumbnail';
import { getYear } from '../../utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatchAction } from '../../hooks/useDispatchAction';
import { historyActions } from '../../store';
import { useWatchlist } from '../../hooks';
import { EPISODE, MOVIE, TV } from '../../data/constants';

function getContentMeta({ media_type, id, season_number, episode_number, tvId }) {
  const meta = {
    movie: { type: 'Movie', metaClass: 'movie-meta', link: `/movie/${id}` },
    episode: {
      type: 'Episode',
      metaClass: 'tv-meta',
      link: `/tv/${tvId}/watch/${season_number}/${episode_number}`,
    },
  };

  return meta[media_type];
}

export default function PlayableCard({
  id,
  tvId,
  title,
  showIcon,
  watched,
  media_type,
  showProgress,
  poster_path,
  backdrop_path,
  season_number,
  episode_number,
  date,
}) {
  const { add, remove, isInWatchlist } = useWatchlist({
    media: media_type === EPISODE ? TV : MOVIE,
    id: tvId || id,
  });

  const wlClickHandler = useCallback(() => {
    if (!media_type || !id) return;
    if (isInWatchlist) {
      remove();
    } else {
      add({
        id,
        title,
        showIcon,
        watched,
        media_type,
        showProgress,
        poster_path,
        season_number,
        episode_number,
        date,
      });
    }
  }, [
    media_type,
    id,
    isInWatchlist,
    remove,
    add,
    title,
    showIcon,
    watched,
    showProgress,
    poster_path,
    season_number,
    episode_number,
    date,
  ]);

  const { type, link, metaClass } = useMemo(
    () => getContentMeta({ media_type, id, season_number, episode_number, tvId, date }),
    [media_type, id, season_number, episode_number, tvId, date],
  );

  const [wlClass, setWlClass] = useState(isInWatchlist ? 'fa-heart' : 'fa-heart-o');

  useEffect(() => {
    setWlClass(isInWatchlist ? 'fa-heart' : 'fa-heart-o');
  }, [isInWatchlist]);

  const dispatch = useDispatchAction(historyActions);

  function handleRemove(event) {
    event.stopPropagation();
    dispatch.remove({ id, media_type })();
  }

  return (
    <>
      <div>
        <div className={classes['episode-card']}>
          <a className={classes['thumbnail-container']} href={link}>
            <PlayableThumbnail
              image={backdrop_path}
              progress={watched}
              showProgress={showProgress}
              showIcon={showIcon}
            />
          </a>
          <div className={classes['episode-info']}>
            <p className={classes['episode-card-title']}>
              {title} ({getYear(date)})
            </p>
          </div>
          <div className={classes['episode-meta-container']}>
            <div className={`text-medium ${classes[metaClass]}`}>{type}</div>
            <div className={classes['episode-actions']}>
              <span onClick={wlClickHandler}>
                <i className={wlClass}></i>
              </span>
              <span onClick={handleRemove}>
                <i className='fa-trash-o'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

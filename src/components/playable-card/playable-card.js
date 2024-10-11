import classes from './episode-card.module.css';

import { PlayableThumbnail } from '../playable-thumbnail';
import { getYear } from '../../utils';
import { useMemo } from 'react';
import { useDispatchAction } from '../../hooks/useDispatchAction';
import { historyActions } from '../../store';

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
  backdrop_path,
  season_number,
  episode_number,
  date,
}) {
  const { type, link, metaClass } = useMemo(
    () => getContentMeta({ media_type, id, season_number, episode_number, tvId, date }),
    [media_type, id, season_number, episode_number, tvId, date],
  );

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
            <div className={`text-caption ${classes[metaClass]}`}>{type}</div>
            <div className={classes['episode-actions']}>
              <span>
                <i className='fa-heart-o'></i>
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

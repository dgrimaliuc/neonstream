import classes from './episode-card.module.css';

import PlayableThumbnail from '../playable-thumbnail/playable-thumbnail';
import { getBackdrop, getYear } from '../../utils';

export default function EpisodeCard({
  showProgress,
  showIcon,
  backdrop,
  title,
  to,
  date,
}) {
  if (!backdrop) return;
  return (
    <>
      <div>
        <a className={classes['episode-card']} href={to}>
          <div className={classes['thumbnail-container']}>
            <PlayableThumbnail
              image={backdrop}
              showProgress={showProgress}
              showIcon={showIcon}
            />
          </div>
          <div className={classes['episode-info']}>
            <p className={classes['episode-card-title']}>
              {title} ({getYear(date)})
            </p>
            <div className='text-caption'>Watch now</div>
          </div>
          <div className={classes['episode-meta-container']}>
            <div className={`text-caption ${classes['movie-meta']}`}>Movie</div>
            <div className={classes['episode-actions']}>
              <span>
                <i className='fa-heart-o'></i>
              </span>
              <span>
                <i className='fa-trash-o'></i>
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

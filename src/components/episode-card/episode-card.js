import './episode-card.css';

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
      <a className='episode-card' href={to}>
        <PlayableThumbnail
          img={getBackdrop(backdrop)}
          showProgress={showProgress}
          showIcon={showIcon}
        />
        <div className='episode-info'>
          <p className='episode-card-title'>
            {title} ({getYear(date)})
          </p>
          <div className='text-caption'>Watch now</div>
        </div>
        <div className='episode-meta-container'>
          <div className='episode-meta text-caption movie-meta'>Movie</div>
          <div className='episode-actions'>
            <span>
              <i className='fa-heart-o'></i>
            </span>
            <span>
              <i className='fa-trash-o'></i>
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

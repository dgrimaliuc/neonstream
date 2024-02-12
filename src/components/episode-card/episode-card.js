import './episode-card.css';

import PlayableThumbnail from '../playable-thumbnail/playable-thumbnail';
import { getBackdrop } from '../../utils/images';

export default function EpisodeCard({
  showProgress,
  showIcon,
  backdrop,
  title,
  type,
}) {
  if (!backdrop) return;
  return (
    <>
      <div className='episode-card'>
        <PlayableThumbnail
          img={getBackdrop(backdrop)}
          showProgress={showProgress}
          showIcon={showIcon}
        />
        <div className='episode-info'>
          <p className='episode-card-title'>{title}</p>
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
      </div>
    </>
  );
}

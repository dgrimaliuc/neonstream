import './episode-card.css';

import img from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import PlayableThumbnail from '../playable-thumbnail/playable-thumbnail';

export default function EpisodeCard({ showProgress, showIcon }) {
  return (
    <>
      <div className='episode-card'>
        <PlayableThumbnail
          img={img}
          showProgress={showProgress}
          showIcon={showIcon}
        />
        <div className='episode-info'>
          <p className='episode-card-title'>S1 E1 - One Piece</p>
          <div className='text-caption'>Watch now</div>
        </div>
        <div className='episode-meta-container'>
          <div className='episode-meta text-caption movie-meta'>Series</div>
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

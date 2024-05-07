import { getBackdrop } from '../../utils';
import { Image } from '../lazy-image';
import { WatchProgressBar } from '../watch-progress-bar';
import './playable-thumbnail.css';

export default function PlayableThumbnail({ image, showProgress = 'auto', showIcon = 'auto' }) {
  const opacityStyle = showIcon !== 'auto' ? { '--hover-opacity': showIcon ? 1 : 0 } : {};
  return (
    <>
      <div className='thumbnail-wrapper'>
        <div className='playable-thumbnail' style={opacityStyle}>
          <i className='fa-play-circle'></i>
        </div>
        <div className='thumbnail-img-wrapper'>
          {image && (
            <Image className='thumbnail-img' src={getBackdrop(image)} alt='episode-thumbnail' />
          )}
        </div>
        <WatchProgressBar showProgress={showProgress} />
      </div>
    </>
  );
}

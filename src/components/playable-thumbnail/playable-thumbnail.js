import { useState } from 'react';
import { getBackdrop } from '../../utils';
import { Image } from '../lazy-image';
import { WatchProgressBar } from '../watch-progress-bar';
import './playable-thumbnail.css';

export default function PlayableThumbnail({
  image,
  showProgress = 'auto',
  progress = 0,
  showIcon,
  placeholderWidth = 71,
  placeholderHeight = 40,
}) {
  const [showI, setShowI] = useState(false);
  const showStyle = showIcon || showI ? { display: 'block' } : { display: 'none' };

  const onMouseEnterIconHandler = () => {
    setShowI(true);
  };
  const onMouseLeaveIconHandler = () => {
    setShowI(false);
  };

  return (
    <>
      <div
        className='thumbnail-wrapper'
        onMouseEnter={onMouseEnterIconHandler}
        onMouseLeave={onMouseLeaveIconHandler}
      >
        <div className='playable-thumbnail'>
          <i className='fa-play-circle' style={showStyle} />
        </div>
        <div className='thumbnail-img-wrapper'>
          {image && (
            <Image
              className='thumbnail-img'
              src={getBackdrop(image)}
              alt='episode-thumbnail'
              placeholderWidth={placeholderWidth}
              placeholderHeight={placeholderHeight}
            />
          )}
        </div>
        <WatchProgressBar progress={progress} showProgress={showProgress} />
      </div>
    </>
  );
}

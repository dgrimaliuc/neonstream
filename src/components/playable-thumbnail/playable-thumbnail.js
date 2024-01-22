import WatchProgressBar from '../watch-progress-bar/watch-progress-bar';
import './playable-thumbnail.css';

export default function PlayableThumbnail({
  img,
  showProgress = 'auto',
  showIcon = 'auto',
}) {
  const opacityStyle =
    showIcon !== 'auto' ? { '--hover-opacity': showIcon ? 1 : 0 } : {};
  return (
    <>
      <div className='thumbnail-wrapper'>
        <div className='playable-thumbnail' style={opacityStyle}>
          <i className='fa-play-circle'></i>
        </div>
        <img className='thumbnail-img' src={img} alt='episode-thumbnail' />
        <WatchProgressBar showProgress={showProgress} />
      </div>
    </>
  );
}

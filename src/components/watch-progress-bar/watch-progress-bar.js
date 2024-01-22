import './watch-progress-bar.css';

export default function WatchProgressBar({ progress, showProgress = 'auto' }) {
  const opacityStyle =
    showProgress !== 'auto' ? { '--hover-opacity': showProgress ? 1 : 0 } : {};
  return (
    <div style={opacityStyle} className='progress-bar-default'>
      <span className='progress-bar-colored' />
    </div>
  );
}

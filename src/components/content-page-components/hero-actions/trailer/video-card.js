import classes from './trailer.module.css';
import { CirclePlay } from '../../../icons';
import { Player } from '../../../player';
import { forwardRef } from 'react';
import { getYoutubeUrl } from '../../../../api';

const VideoCard = forwardRef(({ video, onClick }, ref) => {
  return (
    <div ref={ref} className={classes['trailer-card-wrapper']} onClick={onClick}>
      <Player
        className={classes['non-interactive-card']}
        url={getYoutubeUrl(video.key)}
        light={true}
        playIcon={<CirclePlay />}
        controls={true}
        playing={false}
      />
    </div>
  );
});

export default VideoCard;

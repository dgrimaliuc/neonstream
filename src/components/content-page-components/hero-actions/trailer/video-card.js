import classes from './trailer.module.css';
import { CirclePlay } from '../../../icons';
import { Player } from '../../../player';

export default function VideoCard({ video, onClick }) {
  return (
    <div className={classes['trailer-card-wrapper']} onClick={onClick}>
      <Player
        className={classes['non-interactive-card']}
        url={`https://www.youtube.com/watch?v=${video.key}`}
        light={true}
        playIcon={<CirclePlay />}
        controls={true}
        playing={false}
      />
    </div>
  );
}

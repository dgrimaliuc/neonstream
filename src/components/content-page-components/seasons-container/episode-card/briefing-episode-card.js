import { PlayableThumbnail } from '../../../playable-thumbnail';
import styles from './briefing-episode-card.module.css';
import { useSelector } from 'react-redux';
import { EPISODE } from '../../../../data/constants';
import { historyContent } from '../../../../store';

export default function EpisodeCard({
  id,
  episode_number,
  name,
  season_number,
  show_id,
  still_path,
}) {
  const playhead = useSelector(s => historyContent(s).map[`${EPISODE}-${id}`]);

  return (
    <a className={styles.episode} href={`/tv/${show_id}/watch/${season_number}/${episode_number}`}>
      <div className={styles['thumbnail-container']}>
        <PlayableThumbnail
          showIcon={false}
          showProgress
          image={still_path}
          progress={playhead?.watched}
        />
      </div>

      <div className={styles['episode-header']}>
        <h5>
          S{season_number} E{episode_number}
        </h5>
        <span className={`multiline-ellipsis ${styles['episode-title']}`}>{name}</span>
      </div>
    </a>
  );
}

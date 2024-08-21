import { PlayableThumbnail } from '../../../playable-thumbnail';
import styles from './briefing-episode-card.module.css';

export default function EpisodeCard({ episode_number, name, season_number, show_id, still_path }) {
  return (
    <a className={styles.episode} href={`/tv/${show_id}/watch/${season_number}/${episode_number}`}>
      <div className={styles['thumbnail-container']}>
        <PlayableThumbnail showIcon={false} showProgress image={still_path} />
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

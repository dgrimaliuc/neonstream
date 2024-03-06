import { getBackdrop } from '../../../../utils';
import PlayableThumbnail from '../../../playable-thumbnail/playable-thumbnail';
import styles from './briefing-episode-card.module.css';

export default function EpisodeCard({
  id,
  // air_date,
  episode_number,
  episode_type,
  name,
  overview,
  production_code,
  runtime,
  season_number,
  show_id,
  still_path,
  vote_average,
  vote_count,
  crew,
  guest_stars,
}) {
  return (
    <a
      className={styles.episode}
      href={`/tv/${show_id}/watch/${season_number}/${episode_number}`}
    >
      <div className={styles['thumbnail-container']}>
        <PlayableThumbnail showIcon='auto' showProgress image={still_path} />
      </div>

      <div className={styles['episode-header']}>
        <h5>
          S{season_number} E{episode_number}
        </h5>
        <span className={styles['episode-title']}>{name}</span>
      </div>
    </a>
  );
}

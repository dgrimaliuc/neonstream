import { PlayableThumbnail } from '../../../playable-thumbnail';
import styles from './briefing-episode-card.module.css';
import { useSelector } from 'react-redux';
import { EPISODE } from '../../../../data/constants';
import { historyContent } from '../../../../store';
import { useMemo } from 'react';
import { combineClasses } from 'utils';

export default function BriefingEpisodeCard({
  id,
  episode_number,
  name,
  season_number,
  show_id,
  still_path,
}) {
  const history = useSelector(historyContent);
  const playhead = useMemo(
    () => (history?.map ? history?.map[`${EPISODE}-${id}`] : 0),
    [history, id],
  );

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
        <span className={combineClasses('multiline-ellipsis', styles['episode-title'])}>
          {name}
        </span>
      </div>
    </a>
  );
}

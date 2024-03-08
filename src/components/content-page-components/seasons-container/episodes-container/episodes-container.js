import styles from './episodes-container.module.css';

import EpisodeCard from '../episode-card/briefing-episode-card';
import { useParams } from 'react-router-dom';
import { getSeasonDetails } from '../../../../services/content';
// import { makeCancelable, sleep } from '../../../../utils';
import LoadingEpisodesContainer from '../episodes-section-states/loading-episodes-container';
import { useDebounceQuery } from '../../../../hooks';
import { useCallback } from 'react';

export default function EpisodesContainer({ seasonMetadata }) {
  const { id: seriesId } = useParams();
  const {
    // air_date,
    // episode_count,
    id,
    name,
    overview,
    // poster_path,
    season_number,
    vote_average,
  } = seasonMetadata;

  const { loading, data, error } = useDebounceQuery(
    useCallback(
      async () => await getSeasonDetails({ id: seriesId, season_number }),
      [season_number, seriesId]
    )
  );

  if (loading) {
    return <LoadingEpisodesContainer />;
  } else if (error) {
    return <LoadingEpisodesContainer message={error.message} />;
  }

  return (
    <div className={styles['episodes-container']}>
      {data &&
        (data.episodes || []).map((ep, i) => <EpisodeCard key={i} {...ep} />)}
    </div>
  );
}

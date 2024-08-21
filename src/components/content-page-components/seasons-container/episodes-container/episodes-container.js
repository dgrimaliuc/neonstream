import styles from './episodes-container.module.css';

import EpisodeCard from '../episode-card/briefing-episode-card';
import { useParams } from 'react-router-dom';
import { getSeasonDetails } from '../../../../services/content';
import LoadingEpisodesContainer from '../episodes-section-states/loading-episodes-container';
import { useDebounceQuery, useChunks } from '../../../../hooks';
import { useCallback, useEffect } from 'react';
import ErrorEpisodesContainer from '../episodes-section-states/error-episodes-container';
import { makeFlatChunks } from '../../../../utils';
import EpisodeLoadButton from './episode-load-button';

export default function EpisodesContainer({ seasonMetadata, maxUserActions = 2 }) {
  const { id: seriesId } = useParams();
  const { season_number } = seasonMetadata;

  const { loading, data, error } = useDebounceQuery(
    useCallback(
      async () => await getSeasonDetails({ id: seriesId, season_number }),
      [season_number, seriesId],
    ),
  );

  const { chunks, loadIndex, loadMore, isEnd, setLoadIndex } = useChunks(
    data ? data.episodes : [],
    30,
  );

  useEffect(() => {
    setLoadIndex(1);
  }, [setLoadIndex, season_number, seriesId]);

  if (loading) {
    return <LoadingEpisodesContainer />;
  } else if (error) {
    return <ErrorEpisodesContainer message={error.message} />;
  }

  return (
    <div className={styles['episodes-wrapper']}>
      <div className={styles['episodes-container']}>
        {data && makeFlatChunks(chunks, loadIndex).map((ep, i) => <EpisodeCard key={i} {...ep} />)}
      </div>
      <EpisodeLoadButton
        maxUserActions={maxUserActions}
        loadIndex={loadIndex}
        onClick={loadIndex > maxUserActions ? setLoadIndex.bind(null, chunks.length) : loadMore}
        isEnd={isEnd}
      />
    </div>
  );
}

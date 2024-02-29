import styles from './episodes-container.module.css';

import EpisodeCard from '../episode-card/briefing-episode-card';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { getSeasonDetails } from '../../../../services/content';
import { makeCancelable, sleep } from '../../../../utils';
import LoadingEpisodesContainer from '../episodes-section-states/loading-episodes-container';

function reducer(state, action) {
  switch (action.type) {
    case 'set_content':
      return { ...state, content: action.payload };
    default:
      break;
  }
}

export default function EpisodesContainer({ seasonMetadata }) {
  const [state, dispatch] = useReducer(reducer, { content: { episodes: [] } });
  const [isLoading, setIsLoading] = useState(true);

  const { content } = state;
  console.log(content);

  // const episodes = splitArray(content.episodes, 10);

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

  useEffect(() => {
    const promise = makeCancelable(
      sleep(800).then(() =>
        getSeasonDetails({
          id: seriesId,
          season_number: season_number,
        })
      )
    );

    setIsLoading(true);
    promise
      .then((data) => {
        dispatch({ type: 'set_content', payload: data });
      })
      .then(setIsLoading.bind(null, false));

    return () => {
      promise.cancel();
    };
  }, [seriesId, season_number]);

  return (
    <div className={styles['episodes-container']}>
      {isLoading ? (
        <LoadingEpisodesContainer />
      ) : (
        (content.episodes || []).map((ep, i) => <EpisodeCard key={i} {...ep} />)
      )}
    </div>
  );
}

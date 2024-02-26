import styles from './episodes-container.module.css';

import Pagination from '../../../../components/pagination/pagination';
import EpisodeCard from './episode-card';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { getSeasonDetails } from '../../../../services/content';

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

  const { content } = state;

  const { id: seriesId } = useParams();
  const {
    air_date,
    episode_count,
    id,
    name,
    overview,
    poster_path,
    season_number,
    vote_average,
  } = seasonMetadata;

  useEffect(() => {
    const fetcher = async () => {
      return await getSeasonDetails({
        id: seriesId,
        season_number: season_number,
      });
    };
    fetcher().then((data) => {
      dispatch({ type: 'set_content', payload: data });
    });
  }, [seriesId, season_number]);

  return (
    <div className={styles['episodes-container']}>
      {content.episodes.map((ep, i) => (
        <EpisodeCard key={i + ep.episode_number} />
      ))}

      <div>
        <Pagination />
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import { getSeasonDetails } from '../services/content';
import { useQuery } from './useQuery';

export default function useUpNext({ id, season, episode, seasonsLength }) {
  console.log(id, season, episode, seasonsLength);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const { loading, data, error } = useQuery(
    useCallback(async () => await getSeasonDetails({ id, season_number: season }), [id, season]),
  );

  useEffect(() => {
    if (data) {
      const episodes = data.episodes;
      const currentEpisodeIndex = episodes.findIndex(ep => ep.episode_number === episode);
      console.log('currentEpisodeIndex', currentEpisodeIndex);
      const tempPrev = episodes[currentEpisodeIndex - 1] || null;
      const tempNext = episodes[currentEpisodeIndex + 1] || null;

      if (!tempPrev && episode === 1 && season - 1 >= 0) {
        getSeasonDetails({ id, season_number: season - 1 }).then(res => {
          if (res?.episodes.length > 0) {
            setPrev(res.episodes[res.episodes.length - 1]);
          }
        });
      } else {
        setPrev(tempPrev);
      }

      if (!tempNext && season < seasonsLength) {
        getSeasonDetails({ id, season_number: season + 1 }).then(res => {
          if (res?.episodes.length > 0) {
            setNext(res.episodes[0]);
          }
        });
      } else {
        setNext(tempNext);
      }
    }
  }, [data, episode, id, season, seasonsLength]);

  return { error, loading, next, prev };
}

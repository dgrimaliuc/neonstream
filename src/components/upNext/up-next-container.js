import './upNext.css';
import { useLoaderData, useParams } from 'react-router-dom';
import useUpNext from '../../hooks/useUpNext';
import UpNextCard from './up-next-card';
import useSeries from '../../hooks/useSeries';

export default function UpNextContainer() {
  const { id } = useParams();
  const { season_number, episode_number } = useLoaderData();
  const { series } = useSeries();

  const { loading, next, prev } = useUpNext({
    id,
    season: season_number,
    episode: episode_number,
    seasonsLength: series.number_of_seasons,
  });

  return (
    <div className='up-next-episodes'>
      <UpNextCard episodeData={next} loading={loading} title='Next Episode' seriesId={id} />
      <UpNextCard episodeData={prev} loading={loading} title='Previous Episode' seriesId={id} />
    </div>
  );
}

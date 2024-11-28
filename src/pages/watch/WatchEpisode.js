import './watch.css';

import { getEpisode } from '../../services/content';
import { useLoaderData, useParams } from 'react-router-dom';
import { VODPlayer } from '../../components/player';
import useSeries from '../../hooks/useSeries';
import { TV } from '../../data/constants';
import { UpNextContainer } from '../../components/upNext';
import { formatVoteAverage, formatVoteCount } from '../../api';

export async function loadEpisode({ params }) {
  return await getEpisode(params.id, params.season, params.episode);
}

export default function WatchEpisode() {
  const { id } = useParams();
  const { season_number, episode_number, name, overview } = useLoaderData();
  const { series } = useSeries();
  const { id: episode_id } = useLoaderData();

  return (
    <>
      <div className='watch-wrapper'>
        <VODPlayer
          content={{
            ...series,
            id,
            media_type: TV,
            season_number,
            episode_number,
            episode_id,
          }}
        />
      </div>
      <div className='watch-info-wrapper'>
        <div className='media-info-container'>
          <div className='media-info-header'>
            <a className='content-title-container' href={`/tv/${id}`}>
              <div className='content-title'>{series.name}</div>
            </a>
            <span>
              <span>
                {formatVoteAverage(series.vote_average)} <span className='icon-star-small' /> (
                {formatVoteCount(series.vote_count)})
              </span>
            </span>
          </div>
          <h3>
            S{season_number}E{episode_number} - {name}
          </h3>

          <div className='watch-actions'>
            <span className='watch-action'>
              <i className='fa-thumbs-up'></i> <span>10</span>
            </span>
            <span className='watch-action'>
              <i className='fa-thumbs-down'></i> <span>10</span>
            </span>
          </div>
          <div className='description-wrapper content-description'>
            <div className='description-gradient'>
              <div className='description-gradient-length'>
                <div className='description-container'>
                  <p>{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UpNextContainer />
      </div>
    </>
  );
}

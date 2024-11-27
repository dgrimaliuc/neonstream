import './watch.css';
import upNexImg from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import { getEpisode } from '../../services/content';
import { useLoaderData, useParams } from 'react-router-dom';
import { VODPlayer } from '../../components/player';
import useSeries from '../../hooks/useSeries';
import { useInitialScroll } from '../../hooks';
import { TV } from '../../data/constants';
import useUpNext from '../../hooks/useUpNext';
import { UpNextCard } from '../../components/upNext';

export async function loadEpisode({ params }) {
  return await getEpisode(params.id, params.season, params.episode);
}

export default function WatchEpisode() {
  const { id, season, episode } = useParams();
  const { season_number, episode_number, name, overview } = useLoaderData();

  const { series } = useSeries();

  const { error, loading, next, prev } = useUpNext({
    id,
    season: season_number,
    episode: episode_number,
    seasonsLength: series.number_of_seasons,
  });

  const { id: episode_id } = useLoaderData();
  useInitialScroll({ timeout: 50 });

  return (
    <>
      <div className='watch-wrapper'>
        <VODPlayer
          content={{
            ...series,
            id: series.id,
            media_type: TV,
            season_number: season,
            episode_number: episode,
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
                4.9 <span className='icon-star-small' /> (286.9K)
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
        <div className='up-next-episodes'>
          <UpNextCard episodeData={next} loading={loading} title='Next Episode' seriesId={id} />
          <UpNextCard episodeData={prev} loading={loading} title='Previous Episode' seriesId={id} />
        </div>
      </div>
    </>
  );
}

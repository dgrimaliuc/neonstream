import './watch.css';
import upNexImg from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import { getEpisode } from '../../services/content';
import { useLoaderData, useParams } from 'react-router-dom';
import { VODPlayer } from '../../components/player';

export async function loadEpisode({ params }) {
  return await getEpisode(params.id, params.season, params.episode);
}

export default function WatchEpisode() {
  const { id, season, episode } = useParams();
  const { season_number, episode_number, name, overview } = useLoaderData();
  return (
    <>
      <div className='watch-wrapper'>
        <VODPlayer path={`tv/${id}/${season}/${episode}`} />
      </div>
      <div className='watch-info-wrapper'>
        <div className='media-info-container'>
          <div className='media-info-header'>
            <a className='content-title-container' href={`/tv/${id}`}>
              <div className='content-title'>Open Series</div>
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
          <div className='up-next-episode'>
            <a
              href={`/tv/${id}/watch/${season}/${episode + 1}`}
              className='container-header'
            >
              <span className='up-next-header-text'>Next Episode</span>
            </a>
            <a
              href={`/tv/${id}/watch/${season}/${episode + 1}`}
              className='up-next-episode-body'
            >
              <div className='up-next-image-container'>
                <img className='up-next-image' src={upNexImg} alt='' />
              </div>
              <div className='up-next-info'>
                <div className='up-next-info-box'>
                  <h5>Episode title</h5>

                  <p className='description-wrapper'>20m</p>
                </div>
              </div>
            </a>
          </div>
          <div className='up-next-episode'>
            <a
              href={`/tv/${id}/watch/${season}/${episode - 1}`}
              className='container-header'
            >
              <span className='up-next-header-text'>Previous Episode</span>
            </a>
            <a
              href={`/tv/${id}/watch/${season}/${episode - 1}`}
              className='up-next-episode-body'
            >
              <div className='up-next-image-container'>
                <img className='up-next-image' src={upNexImg} alt='' />
              </div>
              <div className='up-next-info'>
                <div className='up-next-info-box'>
                  <h5>Episode title</h5>

                  <p className='description-wrapper'>20m</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

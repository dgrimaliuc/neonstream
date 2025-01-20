import './upNext.css';
import { Image } from 'components/lazy-image';
import { getBackdrop } from '../../utils';
import UpNextCardPlaceholder from './placeholder-up-next-card';

export default function UpNextCard({ episodeData, loading, title, seriesId }) {
  if (loading) {
    return <UpNextCardPlaceholder />;
  } else if (!episodeData) return null;
  const { season_number, episode_number, still_path, name, runtime } = episodeData;
  return (
    <div className='up-next-episode'>
      <a
        href={`/tv/${seriesId}/watch/${season_number}/${episode_number}`}
        className='container-header'
      >
        <span className='up-next-header-text'>{title}</span>
      </a>
      <a
        href={`/tv/${seriesId}/watch/${season_number}/${episode_number}`}
        className='up-next-episode-body'
      >
        <div className='up-next-image-container'>
          <Image
            className='up-next-image'
            src={getBackdrop(still_path)}
            placeholderWidth={30}
            placeholderHeight={17}
            showPlaceholderOnLoading
          />
        </div>
        <div className='up-next-info'>
          <div className='up-next-info-box'>
            <div className='multiline-ellipsis up-next-truncated-title'>{name}</div>
            <p className='description-wrapper'>{runtime || 0}m</p>
          </div>
        </div>
      </a>
    </div>
  );
}

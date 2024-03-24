import './single-card.css';
import ActionsContainer from '../actions/actionsContainer';
import { useSingleContentLoader } from '../../hooks';
import { getBackdrop, getPoster, getYear } from '../../utils';
import { Genres } from '../genres';
import { memo } from 'react';

const SingleCard = memo(({ id, mediaType }) => {
  const { data } = useSingleContentLoader(id, mediaType);

  if (!data) return null;

  const {
    genres,
    backdrop_path,
    poster_path,
    overview,
    release_date,
    last_air_date,
    vote_average,
    vote_count,
  } = data;

  return (
    <div className='single-card-wrapper'>
      <div className='single-card'>
        <div className='single-card-container'>
          <img
            className='blur_back single-card-image'
            src={getBackdrop(backdrop_path)}
            alt='Single card'
          />
          <div className='single-card-info-wrapper'>
            <div className='single-card-header'>
              <a href={`${mediaType}/${id}`}>
                <picture>
                  <img
                    className='single-card-poster'
                    src={getPoster(poster_path)}
                    alt='Single card poster'
                  />
                </picture>
              </a>
              <div className='single-card-info-column'>
                <a href={`${mediaType}/${id}`}>
                  <h2 className='single-card-title'>
                    {data.title || data.name} (
                    {getYear(release_date || last_air_date)})
                  </h2>
                </a>
                <div>
                  Ratings:{' '}
                  <span>
                    {parseFloat(vote_average).toFixed(1)}{' '}
                    <span className='icon-star-small' /> ({vote_count})
                  </span>
                </div>
                <Genres genres={genres} />
              </div>
            </div>

            <div className='single-card-description'>{overview}</div>
            <ActionsContainer addToList={false} wlMinimal />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SingleCard;

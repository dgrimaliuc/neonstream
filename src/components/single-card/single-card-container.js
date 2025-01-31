import { memo } from 'react';
import { useNavigateToContent } from '../../hooks';
import { getBackdrop, getPoster, getYear } from '../../utils';
import { ActionsContainer } from '../actions';
import { Genres } from '../genres';
import { Image } from 'components/lazy-image';
import { AverageRatingInfo } from '../ratings';

const SingleCardContainer = memo(
  ({
    backdrop_path,
    mediaType,
    id,
    poster_path,
    title,
    year,
    vote_average,
    vote_count,
    genres,
    overview,
    data,
  }) => {
    const navigate = useNavigateToContent(mediaType, id);

    return (
      <div className='single-card-container'>
        <Image
          className='blur_back single-card-image'
          src={getBackdrop(backdrop_path, 2)}
          alt='Single card'
        />
        <div className='single-card-info-wrapper'>
          <div className='single-card-header'>
            <a href={`${mediaType}/${id}`}>
              <picture>
                <Image
                  className='single-card-poster'
                  src={getPoster(poster_path)}
                  placeholderWidth={2}
                  placeholderHeight={3}
                  showPlaceholderOnLoading
                  alt='Single card poster'
                />
              </picture>
            </a>
            <div className='single-card-info-column'>
              <a href={`${mediaType}/${id}`}>
                <h2 className='single-card-title'>
                  {title} ({getYear(year)})
                </h2>
              </a>
              <AverageRatingInfo
                className='average-card-ratings'
                vote_average={vote_average}
                vote_count={vote_count}
              />
              <Genres genres={genres} />
            </div>
          </div>

          <div className='single-card-description'>{overview}</div>
          <ActionsContainer onWatchClick={navigate} addToList={false} data={data} />
        </div>
      </div>
    );
  },
);
export default SingleCardContainer;

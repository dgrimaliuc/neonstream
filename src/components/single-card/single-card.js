import './single-card.css';

import { useSingleContentLoader } from '../../hooks';
import { memo } from 'react';
import SingleCardContainer from './single-card-container';

const SingleCard = memo(({ id, mediaType }) => {
  const { data, loading, error } = useSingleContentLoader(id, mediaType);

  if (error) return null;

  const { release_date, last_air_date } = data || {};

  return (
    <div className='single-card-wrapper'>
      <div className='single-card'>
        {!loading && (
          <SingleCardContainer
            {...data}
            title={data?.title || data?.name}
            year={release_date || last_air_date}
            mediaType={mediaType}
            data={data}
          />
        )}
      </div>
    </div>
  );
});

export default SingleCard;

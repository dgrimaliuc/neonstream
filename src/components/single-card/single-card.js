import './single-card.css';

import { useSingleContentLoader } from '../../hooks';
import { memo } from 'react';
import SingleCardContainer from './single-card-container';
import PlaceholderSingleCard from './placeholder-single-card';

const SingleCard = memo(({ id, mediaType }) => {
  const { data, loading, error } = useSingleContentLoader(id, mediaType);

  if (error) return null;

  if (loading) {
    return <PlaceholderSingleCard />;
  }

  const { release_date, last_air_date } = data || {};

  return (
    <div className='single-card-wrapper'>
      <div className='single-card'>
        <SingleCardContainer
          title={data?.title || data?.name}
          year={release_date || last_air_date}
          mediaType={mediaType}
          data={data}
          {...data}
        />
      </div>
    </div>
  );
});

export default SingleCard;

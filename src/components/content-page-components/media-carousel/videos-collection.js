import { useLoaderData } from 'react-router-dom';
import { CLIP, TEASER, TRAILER, filterByTypes } from '../../../api';
import IntersectionObservedItem from '../../intersection-observer-components/intersection-observed-item';
import MediaVideoCard from './media-video-card';

export default function VideosCollection({ observe, unobserve, visibilityMap }) {
  const data = useLoaderData();

  return (
    <>
      {filterByTypes(data.videos, TRAILER, TEASER, CLIP).map((video, i) => (
        <IntersectionObservedItem
          key={i}
          observe={observe}
          unobserve={unobserve}
          visibilityMap={visibilityMap}
        >
          {ref => <MediaVideoCard ref={ref} video={video} />}
        </IntersectionObservedItem>
      ))}
    </>
  );
}

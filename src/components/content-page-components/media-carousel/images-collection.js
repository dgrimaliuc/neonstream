import { useLoaderData } from 'react-router-dom';

import IntersectionObservedItem from '../../intersection-observer-components/intersection-observed-item';
import MediaImageCard from './media-image-card';

export default function ImagesCollection({ observe, unobserve, visibilityMap }) {
  const data = useLoaderData();

  return (
    <>
      {data.images.backdrops.map((image, i) => (
        <IntersectionObservedItem
          key={i}
          observe={observe}
          unobserve={unobserve}
          visibilityMap={visibilityMap}
        >
          {ref => <MediaImageCard ref={ref} image={image.file_path} />}
        </IntersectionObservedItem>
      ))}
    </>
  );
}

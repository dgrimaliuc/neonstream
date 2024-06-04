import ImagesCollection from './images-collection';
import VideosCollection from './videos-collection';
import { useEffect, useMemo } from 'react';
import { usePagination } from '../../../hooks';
import { useLoaderData } from 'react-router-dom';
const VIDEOS = 'Videos';
const IMAGES = 'Images';

export default function MediaCarouselContainer({
  children,
  observe,
  unobserve,
  visibilityMap,
  isMediaEmpty,
  scrollRef,
}) {
  const data = useLoaderData();
  const media = useMemo(
    () => [
      {
        title: VIDEOS,
        component: (
          <VideosCollection observe={observe} unobserve={unobserve} visibilityMap={visibilityMap} />
        ),
        index: 0,
      },
      {
        title: IMAGES,
        component: (
          <ImagesCollection observe={observe} unobserve={unobserve} visibilityMap={visibilityMap} />
        ),
        index: 1,
      },
    ],
    [observe, unobserve, visibilityMap],
  );

  const { selected, select, iterator } = usePagination(
    media.length,
    media.find(media => !isMediaEmpty(media.title, data))?.index || 0,
  );

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      // Reset scroll position
      // scrollContainer.scrollTop = 0;
      scrollContainer.scrollLeft = 0;
      // Temporarily disable scrolling
      scrollContainer.style.overflow = 'hidden';
      // Re-enable scrolling after a short delay
      setTimeout(() => {
        scrollContainer.style.overflow = 'auto';
      }, 100); // Adjust the delay as needed
    }
  }, [scrollRef, selected]);

  return children(media, selected, select, iterator);
}

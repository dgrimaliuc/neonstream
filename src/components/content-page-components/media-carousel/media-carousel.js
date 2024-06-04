import classes from './media-carousel.module.css';
import { useLoaderData } from 'react-router-dom';
import { CLIP, TEASER, TRAILER, filterByTypes } from '../../../api';
import { CarouselContainer } from '../../carousel-container';
import MediaCarouselContainer from './media-carousel-container';
import MediaCarouselHeader from './media-carousel-header';
import { Underline } from '../underline';
const VIDEOS = 'Videos';
const IMAGES = 'Images';

// Helpers
const shouldCombineMedia = videos =>
  !isVideosEmpty(videos) &&
  // TODO replace  with jsonpath
  filterByTypes(videos, TRAILER, TEASER, CLIP).length < 3;

const getMediaObject = data => {
  return {
    [VIDEOS]: { isValid: isVideosEmpty, path: data.videos },
    [IMAGES]: { isValid: isImagesEmpty, path: data.images },
  };
};

const isVideosEmpty = videos =>
  !videos || filterByTypes(videos, TRAILER, TEASER, CLIP).length === 0; // TODO replace  with jsonpath
const isImagesEmpty = images => !images || images.backdrops.length === 0;
const isMediaBothEmpty = data => isVideosEmpty(data.videos) && isImagesEmpty(data.images);

const isMediaEmpty = (title, data) => {
  const map = getMediaObject(data);
  const { isValid, path } = map[title];
  return isValid(path);
};

export default function MediaCarousel() {
  const data = useLoaderData();

  if (!data || isMediaBothEmpty(data)) {
    return null;
  }

  return (
    <CarouselContainer>
      {(observe, unobserve, visibilityMap, scrollRef) => (
        <>
          <MediaCarouselContainer
            observe={observe}
            unobserve={unobserve}
            visibilityMap={visibilityMap}
            isMediaEmpty={isMediaEmpty}
            scrollRef={scrollRef}
          >
            {(media, selected, select, iterator) => (
              <div className={classes['media-collection-wrapper']}>
                <MediaCarouselHeader
                  media={media}
                  shouldCombineMedia={shouldCombineMedia}
                  isMediaEmpty={isMediaEmpty}
                  iterator={iterator}
                  select={select}
                  selected={selected}
                  visibilityMap={visibilityMap}
                  scrollRef={scrollRef}
                />
                <div ref={scrollRef} className={classes['carousel-body']}>
                  {media[selected].component}
                  {shouldCombineMedia(data.videos) && media[1].component}
                </div>
              </div>
            )}
          </MediaCarouselContainer>
          <Underline />
        </>
      )}
    </CarouselContainer>
  );
}

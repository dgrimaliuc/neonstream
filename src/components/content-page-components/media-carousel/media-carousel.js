import classes from './media-carousel.module.css';
import { useLoaderData } from 'react-router-dom';
import VideosCollection from './videos-caollection';
import { Controls } from '../../controls';
import BackdropCollection from './backdrops-collection';
import { usePagination } from '../../../hooks';
import { Underline } from '../underline';
import MediaTabsWrapper from './media-tabs-wrapper';
import { CLIP, TEASER, TRAILER, filterByTypes } from '../../../api';
const VIDEOS = 'Videos';
const IMAGES = 'Images';

const mediaArray = [
  { title: VIDEOS, component: <VideosCollection />, index: 0 },
  { title: IMAGES, component: <BackdropCollection />, index: 1 },
];
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

const isOnlyImagesAvailable = data => !isImagesEmpty(data.images) && isVideosEmpty(data.videos);

const isMediaEmpty = (title, data) => {
  const map = getMediaObject(data);
  const { isValid, path } = map[title];
  return isValid(path);
};

export default function MediaCarousel() {
  const data = useLoaderData();
  const { selected, select, iterator } = usePagination(
    mediaArray.length,
    null,
    null,
    0,
    mediaArray.find(media => !isMediaEmpty(media.title, data))?.index || 0,
  );

  if (!data || isMediaBothEmpty(data)) {
    return null;
  }

  return (
    <>
      <div className={classes['media-collection-wrapper']}>
        <div className={classes['carousel-header']}>
          <h3 className={classes['carousel-title']}>Media</h3>

          <MediaTabsWrapper
            mediaArray={mediaArray}
            isOnlyImagesAvailable={isOnlyImagesAvailable}
            shouldCombineMedia={shouldCombineMedia}
            isMediaEmpty={isMediaEmpty}
            iterator={iterator}
            select={select}
            selected={selected}
          />
          <Controls />
        </div>
        <div className={classes['carousel-body']}>
          {mediaArray[selected].component}
          {shouldCombineMedia(data.videos) && <BackdropCollection />}
        </div>
      </div>
      <Underline />
    </>
  );
}

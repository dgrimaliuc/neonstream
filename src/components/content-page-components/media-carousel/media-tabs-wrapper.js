import classes from './media-carousel.module.css';
import { useLoaderData } from 'react-router-dom';
import { default as Tab } from '../seasons-container/season';

export default function MediaTabsWrapper({
  shouldCombineMedia,
  isOnlyImagesAvailable,
  mediaArray,
  iterator,
  isMediaEmpty,
  selected,
  select,
}) {
  const data = useLoaderData();

  return (
    <div>
      {!shouldCombineMedia(data.videos) && (
        <div className={classes['tabs-wrapper']}>
          {iterator(
            (i) =>
              !isMediaEmpty(mediaArray[i].title, data) && (
                <Tab
                  key={i}
                  isSelected={selected === i}
                  seasonTitle={mediaArray[i].title}
                  className={classes.tab}
                  onClick={select.bind(null, i)}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}

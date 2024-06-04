import classes from './media-carousel.module.css';
import { useLoaderData } from 'react-router-dom';
import { default as Tab } from '../seasons-container/season';

const MediaTabsWrapper = ({
  shouldCombineMedia,
  media,
  iterator,
  isMediaEmpty,
  selected,
  select,
}) => {
  const data = useLoaderData();

  return (
    <div>
      {!shouldCombineMedia(data.videos) && (
        <div className={classes['tabs-wrapper']}>
          {iterator(
            i =>
              !isMediaEmpty(media[i].title, data) && (
                <Tab
                  key={i}
                  isSelected={selected === i}
                  seasonTitle={media[i].title}
                  className={classes.tab}
                  onClick={select.bind(null, i)}
                />
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default MediaTabsWrapper;

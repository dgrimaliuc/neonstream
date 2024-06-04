import { useCarouselControls } from '../../../hooks';
import { Controls } from '../../controls';
import classes from './media-carousel.module.css';
import MediaTabsWrapper from './media-tabs-wrapper';

export default function MediaCarouselHeader({
  media,
  shouldCombineMedia,
  isMediaEmpty,
  iterator,
  select,
  selected,
  scrollRef,
  visibilityMap,
}) {
  const { scrollToLeft, scrollToRight } = useCarouselControls(scrollRef, visibilityMap);
  return (
    <div className={classes['carousel-header']}>
      <h3 className={classes['carousel-title']}>Media</h3>

      <MediaTabsWrapper
        media={media}
        shouldCombineMedia={shouldCombineMedia}
        isMediaEmpty={isMediaEmpty}
        iterator={iterator}
        select={select}
        selected={selected}
      />
      <Controls
        onLeftClick={scrollToLeft}
        onRightClick={scrollToRight}
        visibilityMap={visibilityMap}
      />
    </div>
  );
}

import { useCarouselControls } from '../../hooks';
import { Controls } from '../controls';

export default function CarouselHeader({ display, title, scrollRef, visibilityMap }) {
  const { scrollToLeft, scrollToRight } = useCarouselControls(scrollRef, visibilityMap);

  return (
    <div className='carousel-header'>
      {display && (
        <>
          <h2 className='carousel-title'>{title}</h2>
          <Controls
            onLeftClick={scrollToLeft}
            onRightClick={scrollToRight}
            visibilityMap={visibilityMap}
          />
        </>
      )}
    </div>
  );
}

import { useCarouselControls } from '../../hooks';
import { Controls } from '../controls';

export default function CarouselHeader({ title, scrollRef, visibilityMap, navigateTo }) {
  const { scrollToLeft, scrollToRight } = useCarouselControls(scrollRef, visibilityMap);

  return (
    <div className='carousel-header'>
      {navigateTo ? (
        <a href={navigateTo}>
          <h2 className='carousel-title clickable'>
            {title}
            <span className='fa-angle-right right-clickable-arrow' />
          </h2>
        </a>
      ) : (
        <h2 className='carousel-title'>{title}</h2>
      )}

      <Controls
        onLeftClick={scrollToLeft}
        onRightClick={scrollToRight}
        visibilityMap={visibilityMap}
      />
    </div>
  );
}

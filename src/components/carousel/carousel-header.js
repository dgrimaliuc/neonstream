import { Controls } from '../controls';

export default function CarouselHeader({
  title,
  scrollToLeft,
  scrollToRight,
  display,
  visibilityMap,
}) {
  return (
    <div className='carousel-header'>
      <h2 className='carousel-title'>{title}</h2>
      {display && (
        <Controls
          onLeftClick={scrollToLeft}
          onRightClick={scrollToRight}
          visibilityMap={visibilityMap}
        />
      )}
    </div>
  );
}

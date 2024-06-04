import { useMemo } from 'react';

export function useCarouselControls(containerRef, visibilityMap) {
  const firstVisible = useMemo(() => [...visibilityMap].find(entry => entry[1]), [visibilityMap]);

  function scrollToRight() {
    const container = containerRef.current;
    if (container && firstVisible?.length > 0) {
      const element = firstVisible[0];
      const containerWidth = container.offsetWidth;
      const containerOffSetLeft = container.offsetLeft;
      const elementOffsetLeft = element.offsetLeft;

      container.scrollTo({
        left: elementOffsetLeft + containerOffSetLeft + containerWidth,
        behavior: 'smooth',
      });
    }
  }

  function scrollToLeft() {
    const container = containerRef.current;
    if (container && firstVisible?.length > 0) {
      const element = firstVisible[0];
      const elementOffsetLeft = element.offsetLeft;
      const containerWidth = container.offsetWidth;
      const containerOffSetLeft = container.offsetLeft;

      container.scrollTo({
        left: elementOffsetLeft - containerOffSetLeft - containerWidth,
        behavior: 'smooth',
      });
    }
  }

  return { scrollToLeft, scrollToRight };
}

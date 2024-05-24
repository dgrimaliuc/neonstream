export function useCarouselControls(containerRef, refVisibilityMap) {
  const container = containerRef.current;

  function scrollToRight() {
    const visibleElements = [...refVisibilityMap.current].filter(entry => entry[1]);
    const firstVisible = visibleElements[0];
    if (container && firstVisible.length > 0) {
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
    const visibleElements = [...refVisibilityMap.current].filter(entry => entry[1]);
    const firstVisible = visibleElements[0];
    if (container && firstVisible.length > 0) {
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

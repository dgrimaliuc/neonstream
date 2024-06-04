import { useRef } from 'react';
import IntersectionObservedProvider from '../intersection-observer-components/intersection-observed-provider';

const CarouselContainer = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <IntersectionObservedProvider root={scrollRef}>
      {(observe, unobserve, visibilityMap) =>
        children(observe, unobserve, visibilityMap, scrollRef)
      }
    </IntersectionObservedProvider>
  );
};

export default CarouselContainer;

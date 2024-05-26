import { useRef } from 'react';
import IntersectionObservedProvider from '../intersection-observer-components/intersection-observed-provider';

export default function CarouselContainer({ children }) {
  const scrollRef = useRef(null);
  const refVisibilityMap = useRef(null);

  return (
    <IntersectionObservedProvider refVisibilityMap={refVisibilityMap} root={scrollRef.current}>
      {(observe, unobserve, visibilityMap) =>
        children(observe, unobserve, visibilityMap, scrollRef)
      }
    </IntersectionObservedProvider>
  );
}

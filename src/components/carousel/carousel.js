import './carousel.css';

import { useCarouselControls } from '../../hooks';
import { Children, useEffect, useMemo, useRef, useState } from 'react';
import IntersectionObservedProvider from '../intersection-observer-components/intersection-observed-provider';
import IntersectionObservedItem from '../intersection-observer-components/intersection-observed-item';
import Scroll from './scroll';
import CarouselHeader from './carousel-header';

const Carousel = ({ isLoading, children, title }) => {
  const scrollRef = useRef(null);
  const refVisibilityMap = useRef(null);
  const { scrollToLeft, scrollToRight } = useCarouselControls(scrollRef, refVisibilityMap);
  const [isEmpty, setIsEmpty] = useState(false);

  const content = useMemo(
    () => (
      <IntersectionObservedProvider refVisibilityMap={refVisibilityMap} root={scrollRef.current}>
        {(observe, unobserve, visibilityMap) => (
          <div className='carousel-wrapper'>
            <CarouselHeader
              title={title}
              scrollToLeft={scrollToLeft}
              scrollToRight={scrollToRight}
              display={children.length > 0}
              visibilityMap={visibilityMap}
            />
            <Scroll ref={scrollRef}>
              {Children.map(children, (child, i) => (
                <IntersectionObservedItem
                  key={i}
                  observe={observe}
                  unobserve={unobserve}
                  visibilityMap={visibilityMap}
                >
                  {ref => <div ref={ref}>{child}</div>}
                </IntersectionObservedItem>
              ))}
            </Scroll>
          </div>
        )}
      </IntersectionObservedProvider>
    ),
    [children, scrollToLeft, scrollToRight, title],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading && children.length === 0) {
        setIsEmpty(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [children, isLoading]);

  return <>{isEmpty ? null : content}</>;
};

export default Carousel;

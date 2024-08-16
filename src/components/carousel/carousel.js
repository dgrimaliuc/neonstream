import './carousel.css';

import { Children, useEffect, useState } from 'react';
import IntersectionObservedItem from '../intersection-observer-components/intersection-observed-item';
import Scroll from './scroll';
import CarouselHeader from './carousel-header';
import { CarouselContainer } from '../carousel-container';
import { useLocation } from 'react-router-dom';

const Carousel = ({ children, title }) => {
  const { pathname } = useLocation();

  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (pathname.match(/\/(tv|movie)\/\d+/g)) {
      setStyles({ height: '100%' });
    }
  }, [pathname]);

  if (children.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      {(observe, unobserve, visibilityMap, scrollRef) => (
        <div className='carousel-wrapper' style={styles}>
          <CarouselHeader
            display={children.length > 0}
            title={title}
            visibilityMap={visibilityMap}
            scrollRef={scrollRef}
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
    </CarouselContainer>
  );
};

export default Carousel;

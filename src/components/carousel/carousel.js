import './carousel.css';

import { useChildrenSize } from '../../hooks';
import { Children, useEffect, useState } from 'react';
import IntersectionObservedItem from '../intersection-observer-components/intersection-observed-item';
import Scroll from './scroll';
import CarouselHeader from './carousel-header';
import { CarouselContainer } from '../carousel-container';
import { useLocation } from 'react-router-dom';

const Carousel = ({ isLoading, children, title }) => {
  const { pathname } = useLocation();
  const { isEmpty } = useChildrenSize(isLoading, children);

  const [styles, setStyles] = useState({});

  useEffect(() => {
    console.log(pathname);

    if (pathname.match(/\/(tv|movie)\/\d+/g)) {
      setStyles({ height: '100%' });
    }
  }, [pathname]);

  return (
    <>
      {!isEmpty && (
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
      )}
    </>
  );
};

export default Carousel;

import './carousel.css';

import { Children } from 'react';
import IntersectionObservedItem from '../intersection-observer-components/intersection-observed-item';
import Scroll from './scroll';
import CarouselHeader from './carousel-header';
import { CarouselContainer } from '../carousel-container';

const Carousel = ({ children, title, navigateTo }) => {
  if (children.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      {(observe, unobserve, visibilityMap, scrollRef) => (
        <div className='carousel-wrapper'>
          <CarouselHeader
            display={children.length > 0}
            title={title}
            visibilityMap={visibilityMap}
            scrollRef={scrollRef}
            navigateTo={navigateTo}
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

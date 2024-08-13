import './hero-carousel.css';
import HeroCardArrow from './components/arrows/arrow';
import HeroCard from './hero-card/hero-card';
import HeroCarouselPagination from './pagination/hero-carousel-pagination-container';
import HeroCardsWrapper from './hero-cards-wrapper';
import { useTabs } from '../../hooks';
import { memo, useEffect } from 'react';
import { useMultipleContentLoader } from '../../hooks/useMultipleContentLoader';
import HeroCarouselPlaceholder from './placeholders/hero-carousel-placeholder';

const HeroCarousel = memo(({ objects = [] }) => {
  const { loading, data } = useMultipleContentLoader(objects);
  const { selected, select, prevPage, nextPage } = useTabs(data?.length);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextPage();
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [nextPage]);

  if (loading && data?.length === 0) {
    return <HeroCarouselPlaceholder />;
  }

  return (
    <div>
      <div className='hero-carousel-wrapper'>
        {data?.length > 0 && <HeroCardArrow direction='left' onClick={prevPage} />}

        <HeroCardsWrapper>
          {data?.map((ob, i) => (
            <HeroCard
              key={i}
              active={i === selected}
              id={ob.id}
              mediaType={ob.media_type}
              data={ob}
            />
          ))}
          <HeroCarouselPagination total={data?.length} selected={selected} onClick={select} />
        </HeroCardsWrapper>

        {data?.length > 0 && <HeroCardArrow direction='right' onClick={nextPage} />}
      </div>
    </div>
  );
});

export default HeroCarousel;

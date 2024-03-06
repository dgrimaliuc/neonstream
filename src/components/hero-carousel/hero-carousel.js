import './hero-carousel.css';
import HeroCardArrow from './components/arrows/arrow';
import HeroCard from './hero-card/hero-card';
import HeroCarouselPagination from './pagination/hero-carousel-pagination-container';
import HeroCardsWrapper from './hero-cards-wrapper';
import { useTabs } from '../../hooks';
import { useEffect } from 'react';

export default function HeroCarousel({ ids = [] }) {
  const { selected, select, prevPage, nextPage } = useTabs(ids.length);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextPage();
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [nextPage]);

  return (
    <div className='hero-carousel-wrapper'>
      <HeroCardArrow direction='left' onClick={prevPage} />

      <HeroCardsWrapper>
        {ids.map((ob, i) => (
          <HeroCard
            key={i}
            active={i === selected}
            id={ob.id}
            mediaType={ob.type}
          />
        ))}
        <HeroCarouselPagination
          total={ids.length}
          selected={selected}
          onClick={select}
        />
      </HeroCardsWrapper>

      <HeroCardArrow direction='right' onClick={nextPage} />
    </div>
  );
}

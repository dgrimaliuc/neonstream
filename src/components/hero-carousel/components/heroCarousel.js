import styles from '../styles/index.module.scss';
import HeroCard from './heroCard';
import HeroCarouselPagination from '../pagination/hero-carousel-pagination-container';
import HeroCardsWrapper from './hero-cards-wrapper';
import { useTabs } from '../../../hooks';
import { memo, useEffect } from 'react';
import { useMultipleContentLoader } from '../../../hooks/useMultipleContentLoader';
import HeroCarouselPlaceholder from './placeholderHeroCarousel';
import HeroArrowsWrapper from './hero-arrows-wrapper';

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

  if (loading) {
    return <HeroCarouselPlaceholder />;
  }

  return (
    <div>
      <div className={styles['hero-carousel-wrapper']}>
        <HeroArrowsWrapper data={data} onPrevClick={prevPage} onNextClick={nextPage}>
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
        </HeroArrowsWrapper>
      </div>
    </div>
  );
});

export default HeroCarousel;

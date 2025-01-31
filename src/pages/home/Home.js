import classes from './home.module.css';

import { HeroCarousel } from '../../components/hero-carousel';
import { SinglePromoCardNeon, SinglePromoCardViolet } from '../../components/single-promo-card';
import { SingleCard } from '../../components/single-card';
import {
  BrowseCollection,
  WatchlistCollection,
  HistoryCollection,
} from '../../components/carousel';
import { useObserver, useChunks, useInitialScroll } from '../../hooks';
import { renderArray, sleep } from '../../utils';
import { Spinner } from '../../components/spinner';
import {
  AIRING_TODAY_SERIES,
  // CONTINUE_WATCHING,
  MOVIE,
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  POPULAR_SERIES,
  RECOMMENDED_MOVIES,
  RECOMMENDED_SERIES,
  TOP_RATED_MOVIES,
  TOP_RATED_SERIES,
  TV,
  UPCOMING_MOVIES,
} from '../../data/constants';
import { useMemo, useRef } from 'react';

function Home() {
  const { chunks, loadIndex, loadMore, isEnd } = useChunks(
    [
      <HistoryCollection />,
      <WatchlistCollection />,
      <BrowseCollection type={UPCOMING_MOVIES} />,
      <BrowseCollection type={TOP_RATED_SERIES} />,
      <BrowseCollection type={NOW_PLAYING_MOVIES} />,
      <SinglePromoCardViolet id={912649} mediaType={MOVIE} secondImageIndex={2} />,
      <BrowseCollection type={POPULAR_SERIES} />,
      <BrowseCollection type={POPULAR_MOVIES} />,
      <SinglePromoCardNeon id={94605} mediaType={TV} secondImageIndex={2} />,
      <BrowseCollection baseId={1029575} type={RECOMMENDED_MOVIES} />,
      <SingleCard id={1396} mediaType={TV} />,
      <BrowseCollection baseId={42009} type={RECOMMENDED_SERIES} />,
      <SinglePromoCardViolet id={381289} mediaType={MOVIE} secondImageIndex={3} />,
      <BrowseCollection type={TOP_RATED_MOVIES} />,
      <SingleCard id={746036} mediaType={MOVIE} />,
      <BrowseCollection type={AIRING_TODAY_SERIES} />,
    ],
    3,
  );

  useInitialScroll({ timeout: 100 });

  const spinnerRef = useRef(null);

  const objects = useMemo(
    () => [
      { id: 365177, mediaType: MOVIE },
      { id: 94605, mediaType: TV },
      { id: 1063877, mediaType: MOVIE },
      { id: 219532, mediaType: TV },
      { id: 912649, mediaType: MOVIE },
      { id: 1241982, mediaType: MOVIE },
      { id: 539972, mediaType: MOVIE },
      { id: 60059, mediaType: TV },
      { id: 746036, mediaType: MOVIE },
    ],
    [],
  );

  useObserver({ ref: spinnerRef }, () => {
    sleep(1000).then(() => loadMore());
  });

  return (
    <div className={classes['home-container']}>
      <HeroCarousel objects={objects} />

      <section className={classes['collections-container']}>
        {renderArray(chunks, loadIndex)}
        <Spinner display={!isEnd} ref={spinnerRef} />
      </section>
    </div>
  );
}

export default Home;

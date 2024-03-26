import classes from './home.module.css';

import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import {
  SinglePromoCardNeon,
  SinglePromoCardViolet,
} from '../../components/single-promo-card';
import { SingleCard } from '../../components/single-card';
import { BrowseCollection } from '../../components/carousel';
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

function Home() {
  const { chunks, loadIndex, loadMore, isEnd } = useChunks(
    [
      <BrowseCollection type={UPCOMING_MOVIES} />,
      <BrowseCollection type={TOP_RATED_SERIES} />,
      <BrowseCollection type={NOW_PLAYING_MOVIES} />,
      <SinglePromoCardViolet
        id={792307}
        mediaType={MOVIE}
        secondImageIndex={6}
      />,
      <BrowseCollection type={POPULAR_SERIES} />,
      <BrowseCollection type={POPULAR_MOVIES} />,
      <SinglePromoCardNeon id={1399} mediaType={TV} />,

      <BrowseCollection baseId={1029575} type={RECOMMENDED_MOVIES} />,
      <SingleCard id={866398} mediaType={MOVIE} />,

      <BrowseCollection baseId={42009} type={RECOMMENDED_SERIES} />,
      <SinglePromoCardViolet
        id={969492}
        mediaType={MOVIE}
        secondImageIndex={2}
      />,

      <BrowseCollection type={TOP_RATED_MOVIES} />,
      <SingleCard id={86831} mediaType={TV} />,
      <BrowseCollection type={AIRING_TODAY_SERIES} />,
    ],
    3
  );

  useInitialScroll({ timeout: 50 });

  useObserver({ css: '.loader' }, () => {
    sleep(1000).then(() => loadMore());
  });

  return (
    <>
      <div className={classes['home-container']}>
        <HeroCarousel
          ids={[
            { id: 1227816, type: MOVIE },
            { id: 866398, type: MOVIE },
            { id: 60625, type: TV },
            { id: 438631, type: MOVIE },
            { id: 71446, type: TV },
          ]}
        />

        <section className={classes['collections-container']}>
          {renderArray(chunks, loadIndex)}
          <Spinner display={!isEnd} />
        </section>
      </div>
    </>
  );
}

export default Home;

import './Home.css';

import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import SinglePromoCardNeon from '../../components/single-promo-card/single-promo-card-neon';
import SinglePromoCardViolet from '../../components/single-promo-card/single-promo-card-violet';
import SingleCard from '../../components/single-card/single-card';
import MediaCollection from '../../components/carousel/media_collection';
import BrowseCollection from '../../components/carousel/browse_collection';
import { useObserver, useChunks } from '../../hooks';
import { useEffect } from 'react';
import { renderArray, sleep } from '../../utils';
import Spinner from '../../components/spinner/spinner';
import {
  AIRING_TODAY_SERIES,
  CONTINUE_WATCHING,
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
  const feed = [
    <MediaCollection type={CONTINUE_WATCHING} />,
    <BrowseCollection type={UPCOMING_MOVIES} />,
    <SinglePromoCardViolet />,
    <BrowseCollection type={POPULAR_SERIES} />,
    <BrowseCollection type={POPULAR_MOVIES} />,
    <SinglePromoCardNeon />,

    <BrowseCollection baseId={1029575} type={RECOMMENDED_MOVIES} />,
    <SingleCard />,

    <BrowseCollection baseId={42009} type={RECOMMENDED_SERIES} />,
    <SinglePromoCardViolet />,

    <BrowseCollection type={TOP_RATED_MOVIES} />,
    <BrowseCollection type={TOP_RATED_SERIES} />,
    <SingleCard />,

    <BrowseCollection type={NOW_PLAYING_MOVIES} />,
    <BrowseCollection type={AIRING_TODAY_SERIES} />,
  ];
  const { chunks, loadIndex, loadMore, isEnd } = useChunks(feed, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const observer = useObserver('.loader', () => {
    sleep(1000).then(() => loadMore());
  });

  useEffect(() => {
    observer.observe();
    return () => observer.disconnect();
  }, [observer, loadIndex]);

  return (
    <>
      <div className='home-container'>
        <HeroCarousel
          ids={[
            { id: 1227816, type: MOVIE },
            { id: 866398, type: MOVIE },
            { id: 60625, type: TV },
            { id: 438631, type: MOVIE },
            { id: 71446, type: TV },
          ]}
        />

        <section className='collections-container'>
          {renderArray(chunks, loadIndex)}
          <Spinner display={!isEnd} />
        </section>
      </div>
    </>
  );
}

export default Home;

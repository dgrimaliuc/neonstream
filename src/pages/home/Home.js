import './Home.css';

import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import SinglePromoCardNeon from '../../components/single-promo-card/single-promo-card-neon';
import SinglePromoCardViolet from '../../components/single-promo-card/single-promo-card-violet';
import SingleCard from '../../components/single-card/single-card';
import MediaCollection from '../../components/carousel/media_collection';
import BrowseCollection from '../../components/carousel/browse_collection';
import { useObserver, useSplitArray } from '../../hooks';
import { useEffect, useState } from 'react';
import { renderArray, sleep } from '../../utils';
import Spinner from '../../components/spinner/spinner';
import { MOVIE, TV } from '../../data/constants';

function Home() {
  const feed = [
    <MediaCollection type='continue_watching' />,
    <BrowseCollection type='upcoming_movies' />,
    <SinglePromoCardViolet />,
    <BrowseCollection type='popular_series' />,
    <BrowseCollection type='popular_movies' />,
    <SinglePromoCardNeon />,

    <BrowseCollection type='recommended_movies' />,
    <SingleCard />,

    <BrowseCollection type='recommended_series' />,
    <SinglePromoCardViolet />,

    <BrowseCollection type='top_rated_movies' />,
    <BrowseCollection type='top_rated_series' />,
    <SingleCard />,

    <BrowseCollection type='now_playing_movies' />,
    <BrowseCollection type='airing_today_series' />,
  ];

  const [element, setElement] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setElement('.loader');
  }, []);

  const { chunks, loadIndex, loadMore, isEnd } = useSplitArray(feed, 3);

  const observer = useObserver(element, () => {
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

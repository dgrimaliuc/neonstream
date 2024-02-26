import './Home.css';

import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import SinglePromoCardNeon from '../../components/single-promo-card/single-promo-card-neon';
import SinglePromoCardViolet from '../../components/single-promo-card/single-promo-card-violet';
import SingleCard from '../../components/single-card/single-card';
import MediaCollection from '../../components/carousel/media_collection';
import BrowseCollection from '../../components/carousel/browse_collection';
import { useObserver } from '../../hooks/useObserver';
import { useEffect, useState } from 'react';
import { sleep } from '../../utils/jsUtils';
import Spinner from '../../components/spinner/spinner';

function Home() {
  const [element, setElement] = useState(null);
  const [loadIndex, setLoadIndex] = useState(1);
  const observer = useObserver(element, () => {
    sleep(1000).then(() => setLoadIndex((prev) => prev + 1));
  });

  useEffect(() => {
    observer.observe();
    return () => observer.disconnect();
  }, [observer, loadIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setElement('.loader');
  }, []);

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
  return (
    <>
      <div className='home-container'>
        <HeroCarousel />

        <section className='collections-container'>
          {feed.slice(0, loadIndex).map((c, i) => (
            <div key={i}>{c}</div>
          ))}
          <Spinner display={loadIndex < feed.length} />
        </section>
      </div>
    </>
  );
}

export default Home;

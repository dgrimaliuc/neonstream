import './Home.css';

// import MovieDB from 'moviedb/lib/moviedb';
// import { MovieDb } from 'moviedb-axi-promise';
import Carousel from '../../components/carousel/carousel';
import Header from '../../components/header/header';
import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import SinglePromoCardNeon from '../../components/single-promo-card/single-promo-card-neon';
import SinglePromoCardViolet from '../../components/single-promo-card/single-promo-card-violet';
import SingleCard from '../../components/single-card/single-card';
import { useCallback, useEffect, useRef, useState } from 'react';
import FlashMessage from '../../components/flash-message/flash-message';
import MediaCollection from '../../components/carousel/media_collection';
import BrowseCollection from '../../components/carousel/browse_collection';

function Home() {
  useEffect(() => {
    const fc = async () => {
      // await mdb.searchMovie({ query: 'alien' }).catch(console.error);
    };
    fc();
  }, []);
  return (
    <>
      <div className='home-container'>
        <HeroCarousel />

        <section className='collections-container'>
          <MediaCollection type='continue_watching' />
          <BrowseCollection type='popular_series' />
          <BrowseCollection type='popular_movies' />
          <div id='promo-card-violet'>
            <SinglePromoCardNeon />
          </div>
          <BrowseCollection type='recommended_movies' />
          <div id='single-card'>
            <SingleCard />
          </div>
          <BrowseCollection type='recommended_series' />
          <div id='promo-card-neon'>
            <SinglePromoCardViolet />
          </div>
          <BrowseCollection type='top_rated_movies' />
          <BrowseCollection type='top_rated_series' />
          <div id='single-card'>
            <SingleCard />
          </div>
          <BrowseCollection type='now_playing_movies' />
          <BrowseCollection type='airing_today_series' />
        </section>
      </div>
    </>
  );
}

export default Home;

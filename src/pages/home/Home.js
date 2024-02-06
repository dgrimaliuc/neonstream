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
          <Carousel />
          <Carousel />
          <div id='promo-card-violet'>
            <SinglePromoCardNeon />
          </div>
          <Carousel />
          <div id='single-card'>
            <SingleCard />
          </div>
          <Carousel />
          <div id='promo-card-neon'>
            <SinglePromoCardViolet />
          </div>
          <Carousel />
        </section>
      </div>
    </>
  );
}

export default Home;

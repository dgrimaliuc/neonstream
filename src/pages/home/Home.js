import './Home.css';

import Carousel from '../../components/carousel/carousel';
import Header from '../../components/header/header';
import HeroCarousel from '../../components/hero-carousel/hero-carousel';
import SinglePromoCardNeon from '../../components/single-promo-card/single-promo-card-neon';
import SinglePromoCardViolet from '../../components/single-promo-card/single-promo-card-violet';
import SingleCard from '../../components/single-card/single-card';
/*

 <head>
    <link rel="stylesheet" href="/footer/footer.css" />
    <link
      rel="stylesheet"
      href="../components/hero-carousel/hero-carousel.css"
    />
    <script
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"
    ></script>

    <script>
      $('#hero-carousel').load(
        '../components/hero-carousel/hero-carousel.html'
      );
      $('.carousel').each(function (index, element) {
        $.get('../components/carousel/carousel.html', function (data) {
          $(element).html(data);
        });
      });
      $('#promo-card').load(
        '../components/single-promo-card/single-promo-card-violet.html'
      );
      $('#promo-card-neon').load(
        '../components/single-promo-card/single-promo-card-neon.html'
      );
      $('#single-card').load('../components/single-card/single-card.html');
    </script>
  </head>

*/
function Home() {
  return (
    <>
      {/* <Header /> */}
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

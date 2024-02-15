import './episodes.css';
import './hero-content.css';
import './index.css';
import './seasons.css';
import './tags.css';

import smallWideImg1 from '../../assets/One Piece/episodes/one-peace-1-2.jpeg';
import smallWideImg2 from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import Controls from '../../components/controls/controls';
import Carousel from '../../components/carousel/carousel';
import Pagination from '../../components/pagination/pagination';
import BackgroundPicture from '../../components/content-page-components/background-picture/background-picture';
import ContentHeader from '../../components/content-page-components/content-header/content-header';
import HeroContentContainer from '../../components/content-page-components/hero-content-container/hero-content-container';

export default function Series() {
  return (
    <>
      <BackgroundPicture />
      <ContentHeader />
      <HeroContentContainer />
      <section className='season-content-container'>
        <div className='seasons-header'>
          <h2>Season Content</h2>
          <Controls />
        </div>
        <nav className='seasons-container'>
          <div>
            <button className='selected season'>
              <span>Season 1</span>
            </button>
          </div>
          <div>
            <button className='season'>
              <span>Season 2</span>
            </button>
          </div>
          <div>
            <button className='season'>
              <span>Season 3</span>
            </button>
          </div>
        </nav>
        <div className='episodes-container'>
          <div className='episode' role='button'>
            <a href='#'>
              <div className='poster'>
                <picture>
                  <img src={smallWideImg2} alt='Episode' />
                </picture>
              </div>
            </a>
            <div>
              <div className='episode-header'>
                <a href='#' className='text-decoration-off'>
                  <h5>S1 E1</h5>
                  <span className='episode-title'>
                    I'm Luffy! The Man Who's Gonna Be King of the Pirates!
                  </span>
                </a>
              </div>
              <p className='episode-description'>
                Countless souls have been lured along the Grand Line in pursuit
                of the legendary One Piece! Luffy D. Monkey is a young pirate
                with a dream: to prove the legend true and be king of them all!
              </p>
            </div>
          </div>

          <div className='episode' role='button'>
            <a href='#'>
              <div className='poster'>
                <picture>
                  <img src={smallWideImg1} alt='Episode' />
                </picture>
              </div>
            </a>
            <div>
              <div className='episode-header'>
                <a href='#' className='text-decoration-off'>
                  <h5>S1 E2</h5>
                  <span className='episode-title'>
                    Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!
                  </span>
                </a>
              </div>
              <p className='episode-description'>
                Luffy and his new companion Coby set sail in search of the
                infamous pirate hunter Zoro, rumored to be held captive at the
                Marine Base.
              </p>
            </div>
          </div>
          <div className='episode' role='button'>
            <a href='#'>
              <div className='poster'>
                <picture>
                  <img src={smallWideImg2} alt='Episode' />
                </picture>
              </div>
            </a>
            <div>
              <div className='episode-header'>
                <a href='#' className='text-decoration-off'>
                  <h5>S1 E1</h5>
                  <span className='episode-title'>
                    I'm Luffy! The Man Who's Gonna Be King of the Pirates!
                  </span>
                </a>
              </div>
              <p className='episode-description'>
                Countless souls have been lured along the Grand Line in pursuit
                of the legendary One Piece! Luffy D. Monkey is a young pirate
                with a dream: to prove the legend true and be king of them all!
              </p>
            </div>
          </div>

          {/* <!-- episode nr 2 --> */}
          <div className='episode' role='button'>
            <a href='#'>
              <div className='poster'>
                <picture>
                  <img src={smallWideImg1} alt='Episode' />
                </picture>
              </div>
            </a>
            <div>
              <div className='episode-header'>
                <a href='#' className='text-decoration-off'>
                  <h5>S1 E2</h5>
                  <span className='episode-title'>
                    Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!
                  </span>
                </a>
              </div>
              <p className='episode-description'>
                Luffy and his new companion Coby set sail in search of the
                infamous pirate hunter Zoro, rumored to be held captive at the
                Marine Base.
              </p>
            </div>
          </div>
          <div id='pagination'>
            <Pagination />
          </div>
        </div>
      </section>
      <section id='recom'>
        <Carousel />
      </section>
    </>
  );
}

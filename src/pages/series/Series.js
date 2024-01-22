import './background-image.css';
// import './buttons.css';
import './content-header.css';
import './episodes.css';
import './hero-content.css';
import './index.css';
import './ratings.css';
import './seasons.css';
import './tags.css';

import tallImg from '../../assets/One Piece/One Piece Tall.jpg';
import smallWideImg1 from '../../assets/One Piece/episodes/one-peace-1-2.jpeg';
import smallWideImg2 from '../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import imgWide from '../../assets/One Piece/One Piece Wide.jpg';
import Controls from '../../components/controls/controls';
import Carousel from '../../components/carousel/carousel';
import Pagination from './pagination/pagination';

import { Link } from 'react-router-dom';
export default function Series() {
  return (
    <>
      <div className='content_body'>
        <div className='picture-container'>
          <picture className='back-picture'>
            <div className='img-gradient'></div>
            <img className='header-image' src={imgWide} alt='One Peace' />
          </picture>
        </div>

        <div className='content__body__container'>
          <div className='content-header'>
            <span className='green-text'>WATCH</span>
            <h1 className='title'>One Piece</h1>
            <div className='tags'>
              <span className='tag'>Action</span>
              <span className='tag'>Adventure</span>
              <span className='tag'>Comedy</span>
              <span className='tag'>Drama</span>
              <span className='tag'>Fantasy</span>
              <span className='tag'>Shounen</span>
              <span className='tag'>Super Power</span>
            </div>
            <div className='actions'>
              <div className='watch-now-wrapper'>
                <button className='watch-now-btn'>
                  <Link to='/watch'>
                    <span className='fa-play'></span>
                    Watch Now
                  </Link>
                </button>
              </div>
              <button className='default-button'>
                <span className='fa-plus'></span>
                Add to Watchlist
              </button>
              <button className='default-button'>
                <span className='fa-bars'></span>
                Add to List
              </button>
            </div>
            <div className='rating-section'>
              <div className='ratings'>
                <span className='icon-star checked'></span>
                <span className='icon-star checked'></span>
                <span className='icon-star checked'></span>
                <span className='icon-star'></span>
                <span className='icon-star'></span>
              </div>
              <div className='average-rating'>
                <button className='rating-text'>
                  <span>Average Rating: </span>
                  <span>4.9 (286.9K)</span>
                </button>
              </div>
              <div className='play-trailer-wrapper'>
                <img
                  alt='white_play_button'
                  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41IDhMMS41IDAuNVYxNS41TDE0LjUgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='
                  className='css-lvyu5j en5uzng9'
                />
                <a href='https://www.youtube.com/watch?v=Bf6D-i8YpHg'>
                  <span className='play-trailer-link'>Play Trailer</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className='hero-content-wrapper'>
          <div className='hero-left-section'>
            <span className='hero-image-wrapper'>
              <picture className=''>
                <img className='hero-image' src={tallImg} alt='One Peace' />
              </picture>
            </span>
            <div className='hero-actions'>
              <div>
                <button className='rounded-button' title='See later'>
                  <span className='fa-plus'></span>
                </button>
                <p className='action-label'>To See</p>
              </div>
              <div>
                <button className='rounded-button' title='See later'>
                  <span className='fa-check'></span>
                </button>
                <p className='action-label'>Seen It</p>
              </div>
              <div>
                <button className='rounded-button' title='See later'>
                  <span className='fa-star'></span>
                </button>
                <p className='action-label'>Rate It</p>
              </div>
            </div>
          </div>
          <div className='hero-content'>
            <div className='hero-content-header'>
              <h2 className='mini-title'>One Peace (1997)</h2>
              <span className='watched-by'>8.7K views </span>
            </div>
            <div className='tags'>
              <span className='tag'>Action</span>
              <span className='tag'>Adventure</span>
              <span className='tag'>Comedy</span>
              <span className='tag'>Drama</span>
              <span className='tag'>Fantasy</span>
              <span className='tag'>Shounen</span>
              <span className='tag'>Super Power</span>
            </div>
            <div className='description'>
              <div className='description-gradient'>
                <div className='description-gradient-length'>
                  <div className='description-container'>
                    <p>
                      Monkey. D. Luffy refuses to let anyone or anything stand
                      in the way of his quest to become the king of all pirates.
                      With a course charted for the treacherous waters of the
                      Grand Line and beyond, this is one captain who'll never
                      give up until he's claimed the greatest treasure on Earth:
                      the Legendary One Piece!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  Countless souls have been lured along the Grand Line in
                  pursuit of the legendary One Piece! Luffy D. Monkey is a young
                  pirate with a dream: to prove the legend true and be king of
                  them all!
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
                  Countless souls have been lured along the Grand Line in
                  pursuit of the legendary One Piece! Luffy D. Monkey is a young
                  pirate with a dream: to prove the legend true and be king of
                  them all!
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
      </div>
    </>
  );
}

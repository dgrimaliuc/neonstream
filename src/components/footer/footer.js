import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-column'>
          <h4>Navigation</h4>
          <ul>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' className='as' href='/browse'>
                <span>Browse All</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' className='as' href='/browse/tv'>
                <span>Browse TV</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' href='/browse/movies' className='as'>
                <span>Browse Movies</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-column'>
          <h4>Connect With Us</h4>
          <ul className='list'>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' href='https://www.youtube.com' className='as'>
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='youtube-svg'
                    aria-labelledby='youtube-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='youtube-svg'>YouTube</title>
                    <path d='M15.666,4.124A2.01,2.01,0,0,0,14.251,2.7,47.511,47.511,0,0,0,8,2.364,47.511,47.511,0,0,0,1.749,2.7,2.01,2.01,0,0,0,.334,4.124,21.09,21.09,0,0,0,0,8a21.09,21.09,0,0,0,.334,3.876A2.01,2.01,0,0,0,1.749,13.3,47.509,47.509,0,0,0,8,13.636a47.509,47.509,0,0,0,6.251-.337,2.01,2.01,0,0,0,1.415-1.424A21.09,21.09,0,0,0,16,8,21.09,21.09,0,0,0,15.666,4.124Zm-9.3,6.255V5.621L10.545,8Z'></path>
                  </svg>
                  Youtube
                </span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' href='https://www.facebook.com' className='as'>
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='facebook-svg'
                    aria-labelledby='facebook-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='facebook-svg'>Facebook</title>
                    <path d='M15.1169,0 L0.8829,0 C0.3949,0 -0.0001,0.395 -0.0001,0.883 L-0.0001,15.117 C-0.0001,15.605 0.3949,16 0.8829,16 L8.5459,16 L8.5459,9.804 L6.4609,9.804 L6.4609,7.389 L8.5459,7.389 L8.5459,5.608 C8.5459,3.542 9.8079,2.417 11.6519,2.417 C12.5349,2.417 13.2939,2.482 13.5149,2.512 L13.5149,4.671 L12.2369,4.672 C11.2339,4.672 11.0399,5.148 11.0399,5.848 L11.0399,7.389 L13.4309,7.389 L13.1199,9.804 L11.0399,9.804 L11.0399,16 L15.1169,16 C15.6049,16 15.9999,15.605 15.9999,15.117 L15.9999,0.883 C15.9999,0.395 15.6049,0 15.1169,0'></path>
                  </svg>
                  Facebook
                </span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' href='https://twitter.com' className='as'>
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='twitter-svg'
                    aria-labelledby='twitter-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='twitter-svg'>Twitter</title>
                    <path d='M5,14.5a9.28,9.28,0,0,0,9.34-9.34c0-.14,0-0.28,0-0.42A6.68,6.68,0,0,0,16,3a6.55,6.55,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.58,6.58,0,0,1-2.08.8,3.29,3.29,0,0,0-5.59,3A9.32,9.32,0,0,1,1.11,2.1a3.29,3.29,0,0,0,1,4.38A3.26,3.26,0,0,1,.64,6.07s0,0,0,0A3.28,3.28,0,0,0,3.28,9.33a3.28,3.28,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.59,6.59,0,0,1,.78,13.07,6.68,6.68,0,0,1,0,13,9.29,9.29,0,0,0,5,14.5'></path>
                  </svg>
                  Twitter
                </span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' href='https://www.instagram.com' className='as'>
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='instagram-svg'
                    aria-labelledby='instagram-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='instagram-svg'>Instagram</title>
                    <path d='M8,1.44c2.14,0,2.39,0,3.23,0a4.43,4.43,0,0,1,1.49.28,2.48,2.48,0,0,1,.92.6,2.48,2.48,0,0,1,.6.92,4.43,4.43,0,0,1,.28,1.49c0,0.84,0,1.1,0,3.23s0,2.39,0,3.23a4.43,4.43,0,0,1-.28,1.49,2.65,2.65,0,0,1-1.52,1.52,4.43,4.43,0,0,1-1.49.28c-0.84,0-1.1,0-3.23,0s-2.39,0-3.23,0a4.43,4.43,0,0,1-1.49-.28,2.48,2.48,0,0,1-.92-0.6,2.48,2.48,0,0,1-.6-0.92,4.43,4.43,0,0,1-.28-1.49c0-.84,0-1.1,0-3.23s0-2.39,0-3.23a4.43,4.43,0,0,1,.28-1.49,2.48,2.48,0,0,1,.6-0.92,2.48,2.48,0,0,1,.92-0.6,4.43,4.43,0,0,1,1.49-.28c0.84,0,1.1,0,3.23,0M8,0C5.83,0,5.55,0,4.7,0A5.87,5.87,0,0,0,2.76.42a3.92,3.92,0,0,0-1.42.92A3.92,3.92,0,0,0,.42,2.76,5.87,5.87,0,0,0,0,4.7C0,5.55,0,5.83,0,8s0,2.45,0,3.3a5.87,5.87,0,0,0,.37,1.94,3.92,3.92,0,0,0,.92,1.42,3.92,3.92,0,0,0,1.42.92A5.87,5.87,0,0,0,4.7,16c0.85,0,1.13,0,3.3,0s2.45,0,3.3,0a5.87,5.87,0,0,0,1.94-.37,4.09,4.09,0,0,0,2.34-2.34A5.87,5.87,0,0,0,16,11.3c0-.85,0-1.13,0-3.3s0-2.45,0-3.3a5.87,5.87,0,0,0-.37-1.94,3.92,3.92,0,0,0-.92-1.42A3.92,3.92,0,0,0,13.24.42,5.87,5.87,0,0,0,11.3,0C10.45,0,10.17,0,8,0H8Z'></path>
                    <path d='M8,3.89A4.11,4.11,0,1,0,12.11,8,4.11,4.11,0,0,0,8,3.89Zm0,6.77A2.67,2.67,0,1,1,10.67,8,2.67,2.67,0,0,1,8,10.67Z'></path>
                    <circle cx='12.27' cy='3.73' r='0.96'></circle>
                  </svg>
                  Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4>Account</h4>
          <ul className='list'>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' data-t='watchlist-link' className='as' href='/watchlist'>
                <span>Watchlist</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' data-t='crunchylists-link' className='as' href='/custom-lists'>
                <span>Custom Lists</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' data-t='history-link' className='as' href='/history'>
                <span>History</span>
              </a>
            </li>
            {/* <li className='erc-footer-section-item'>
              <a tabIndex='0' data-t='account-link' className='as' href='/account/preferences'>
                <span>My Account</span>
              </a>
            </li> */}
            {/* <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.crunchyroll.com/logout'
                data-t='sign-out-link'
                className='as'
              >
                <span>Log Out</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

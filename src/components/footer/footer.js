import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='flx-1'>
          <h4>Navigation</h4>
          <ul>
            <li className='erc-footer-section-item'>
              <a tabIndex='0' className='as' href='/videos/popular'>
                <span>Browse Popular</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                className='as'
                href='/simulcasts/seasons/winter-2024'
              >
                <span>Browse Simulcasts</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.crunchyroll.com/simulcastcalendar'
                className='as'
              >
                <span>Release Calendar</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.crunchyroll.com/news'
                className='as'
              >
                <span>News</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.crunchyroll.com/games/index.html'
                className='as'
              >
                <span>Games</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='flx-1'>
          <h4>Connect With Us</h4>
          <ul className='list'>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.youtube.com/user/crunchyroll/'
                target='_blank'
                className='as'
              >
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
              <a
                tabIndex='0'
                href='https://www.facebook.com/Crunchyroll/'
                target='_blank'
                className='as'
              >
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
              <a
                tabIndex='0'
                href='https://twitter.com/crunchyroll'
                target='_blank'
                className='as'
              >
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
              <a
                tabIndex='0'
                href='https://www.instagram.com/crunchyroll/'
                target='_blank'
                className='as'
              >
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
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.tiktok.com/@crunchyroll'
                target='_blank'
                className='as'
              >
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='tiktok-svg'
                    aria-labelledby='tiktok-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='tiktok-svg'>TikTok</title>
                    <path d='M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.854 2.854 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 0 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.853 2.853 0 0 0 2.63 2.547v1.78'></path>
                  </svg>
                  TikTok
                </span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://vk.com/crunchyroll'
                target='_blank'
                className='as'
              >
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='vkontakte-svg'
                    aria-labelledby='vkontakte-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='vkontakte-svg'>VKontakte</title>
                    <path d='M15.623 3.694c.12-.392 0-.676-.525-.676h-1.745c-.44 0-.644.249-.763.516 0 0-.898 2.277-2.152 3.754-.406.427-.593.57-.813.57-.119 0-.271-.143-.271-.534V3.676c0-.462-.136-.676-.509-.676H6.1a.43.43 0 00-.44.427c0 .445.627.552.694 1.797V7.93c0 .587-.101.694-.322.694-.593 0-2.033-2.296-2.897-4.911-.17-.516-.339-.712-.78-.712H.593C.085 3 0 3.25 0 3.516c0 .48.593 2.9 2.762 6.103 1.44 2.189 3.49 3.363 5.338 3.363 1.118 0 1.254-.267 1.254-.712v-1.654c0-.534.101-.623.457-.623.254 0 .712.142 1.746 1.192 1.186 1.246 1.39 1.815 2.05 1.815h1.745c.509 0 .746-.267.61-.783-.152-.516-.728-1.263-1.474-2.153-.407-.498-1.017-1.05-1.203-1.317-.254-.356-.186-.498 0-.818-.017 0 2.118-3.167 2.338-4.235'></path>
                  </svg>
                  VKontakte
                </span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://ok.ru/crunchyroll'
                target='_blank'
                className='as'
              >
                <span>
                  <svg
                    className='left-icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    data-t='odnoklassniki-svg'
                    aria-labelledby='odnoklassniki-svg'
                    aria-hidden='true'
                    role='img'
                  >
                    <title id='odnoklassniki-svg'>Odnoklassniki</title>
                    <path d='M10.004 11.627a7.73 7.73 0 002.398-.994 1.21 1.21 0 10-1.29-2.05 5.241 5.241 0 01-5.56 0 1.21 1.21 0 00-1.289 2.05 7.7 7.7 0 002.397.994l-2.306 2.308A1.208 1.208 0 005.208 16c.31 0 .62-.119.857-.354l2.268-2.269 2.27 2.269a1.21 1.21 0 001.71-1.71l-2.309-2.309m-1.67-9.206c.943 0 1.71.767 1.71 1.71a1.712 1.712 0 01-3.421 0c0-.944.769-1.71 1.71-1.71zm0 5.837a4.134 4.134 0 004.129-4.127C12.463 1.852 10.61 0 8.332 0S4.204 1.852 4.204 4.13a4.133 4.133 0 004.13 4.128z'></path>
                  </svg>
                  Odnoklassniki
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='flx-1'>
          <h4>Account</h4>
          <ul className='list'>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                data-t='watchlist-link'
                className='as'
                href='/watchlist'
              >
                <span>Watchlist</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                data-t='crunchylists-link'
                className='as'
                href='/crunchylists'
              >
                <span>Crunchylists</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                data-t='history-link'
                className='as'
                href='/history'
              >
                <span>History</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                data-t='account-link'
                className='as'
                href='/account/preferences'
              >
                <span>My Account</span>
              </a>
            </li>
            <li className='erc-footer-section-item'>
              <a
                tabIndex='0'
                href='https://www.crunchyroll.com/logout'
                data-t='sign-out-link'
                className='as'
              >
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

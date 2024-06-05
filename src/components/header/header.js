import './header.css';
import './flex-styles.css';
import './login.css';
import './logo.css';
import './navigation.css';
import './search-input.css';

import { NavLink } from 'react-router-dom';
import SearchInput from './search-input';

export default function Header() {
  return (
    <>
      <header>
        <a className='logo flex-item neonText' href='/'>
          <div>
            <img className='saturn' src='/./logo.svg' alt='Saturn' />
          </div>
          <div className='text-logo' role='button'>
            Neon
          </div>
        </a>
        <div className='row-wrapper flx-2'>
          <SearchInput />
          <div className='navigation text'>
            <NavLink to='/' role='button'>
              <span>Home</span>
            </NavLink>
            <NavLink end to='/browse' role='button'>
              <span>All</span>
            </NavLink>
            <NavLink to='/browse/tv' role='button'>
              <span>Series</span>
            </NavLink>
            <NavLink to='/browse/movies' role='button'>
              <span>Movies</span>
            </NavLink>
            {/* Uncomment after log in feature implementation */}
            <NavLink to='watchlist' role='button'>
              <span>Watchlist</span>
            </NavLink>
          </div>
        </div>
        <div className='login flx-1 text'>
          {/* Uncomment when will be in progress */}
          {/* <Link to='login'>Login</Link>
          <Link to='register'>Sign Up</Link> */}
        </div>
      </header>
      <div className='header-spacer'></div>
    </>
  );
}

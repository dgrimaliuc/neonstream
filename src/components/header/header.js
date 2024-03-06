import './header.css';
import './flex-styles.css';
import './login.css';
import './logo.css';
import './navigation.css';
import './search-input.css';

import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <a className='logo flex-item neonText' href='/'>
          <div className='text-logo' role='button'>
            New Wave
          </div>
        </a>
        <div className='row-wrapper flx-2'>
          <div className='search'>
            <div id='cover'>
              <form method='get' action=''>
                <div className='tb'>
                  <div className='td'>
                    <input type='text' placeholder='Search...' required />
                  </div>
                  <div className='search-action'></div>
                </div>
              </form>
            </div>
          </div>
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
            <NavLink to='watchlist' role='button'>
              <span>Watchlist</span>
            </NavLink>
          </div>
        </div>
        <div className='login flx-1 text'>
          <Link to='login'>Login</Link>
          <Link to='register'>Sign Up</Link>
        </div>
      </header>
      <div className='header-spacer'></div>
    </>
  );
}

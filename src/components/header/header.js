import classes from './header.module.css';
import './flex-styles.css';
import './login.css';
import './logo.css';
import './navigation.css';
import './search-input.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className='logo flex-item neonText'>
          <div className='text-logo' role='button'>
            New Wave
          </div>
        </div>
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
            <NavLink
              to='/'
              role='button'
              className={({ isActive }) =>
                isActive ? classes['active-tab'] : undefined
              }
            >
              Home
            </NavLink>
            <div role='button'>All</div>
            <NavLink
              to='/series'
              role='button'
              className={({ isActive }) =>
                isActive ? classes['active-tab'] : undefined
              }
            >
              Series
            </NavLink>
            <div role='button'>Movies</div>
            <div role='button'>Watchlist</div>
          </div>
        </div>
        <div className='login flx-1 text'>
          <div role='button'>Login</div>
          <div role='button'>Sign Up</div>
        </div>
      </header>
      <div className='header-spacer'></div>
    </>
  );
}

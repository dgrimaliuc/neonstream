import classes from './header.module.css';
import './flex-styles.css';
import './login.css';
import './logo.css';
import './navigation.css';
import './search-input.css';

import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const { search } = useLocation();
  const filter = new URLSearchParams(search).get('filter');
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
              <span>Home</span>
            </NavLink>
            <NavLink
              to='/browse'
              role='button'
              className={({ isActive }) =>
                isActive && !filter ? classes['active-tab'] : undefined
              }
            >
              <span>All</span>
            </NavLink>
            <NavLink
              to='/series'
              role='button'
              className={({ isActive }) =>
                isActive ? classes['active-tab'] : undefined
              }
            >
              <span>Series</span>
            </NavLink>
            <NavLink
              to='/browse?filter=movies'
              role='button'
              className={({ isActive }) =>
                isActive && filter === 'movies'
                  ? classes['active-tab']
                  : undefined
              }
            >
              <span>Movies</span>
            </NavLink>
            <NavLink
              to='watchlist'
              role='button'
              className={({ isActive }) =>
                isActive ? classes['active-tab'] : undefined
              }
            >
              <span>Watchlist</span>
            </NavLink>
          </div>
        </div>
        <div className='login flx-1 text'>
          <Link to='login'>Login</Link>
          <Link to='register'>Sign Up</Link>
        </div>
      </header>
      <div className={classes['header-spacer']}></div>
    </>
  );
}

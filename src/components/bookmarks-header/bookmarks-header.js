import './bookmarks-header.css';

import { NavLink } from 'react-router-dom';

export default function BookmarksHeader() {
  return (
    <>
      <div className='watchlist-header'>
        <h2>
          <span>
            <i className='fa-bookmark-o'></i>
          </span>
          Bookmarks
        </h2>
      </div>
      <div className='watchlist-tabs'>
        <NavLink
          to='/watchlist'
          className={({ isActive }) =>
            isActive ? 'watchlist-tab wl-tab-active' : 'watchlist-tab'
          }
        >
          Watchlist
        </NavLink>
        <NavLink
          to='/custom-lists'
          className={({ isActive }) =>
            isActive ? 'watchlist-tab wl-tab-active' : 'watchlist-tab'
          }
        >
          Custom Lists
        </NavLink>
        <NavLink
          to='/history'
          className={({ isActive }) =>
            isActive ? 'watchlist-tab wl-tab-active' : 'watchlist-tab'
          }
        >
          History
        </NavLink>
      </div>
    </>
  );
}

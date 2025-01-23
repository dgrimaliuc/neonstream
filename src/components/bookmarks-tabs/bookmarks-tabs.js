import './bookmarks.css';

import { NavLink } from 'react-router-dom';

export default function BookmarksTabs() {
  return (
    <>
      <div className='bookmarks-header'>
        <h2>
          <span>
            <i className='fa-bookmark-o'></i>
          </span>
          Bookmarks
        </h2>
      </div>
      <div className='bookmarks-tabs'>
        <NavLink
          to='/watchlist'
          className={({ isActive }) => (isActive ? 'bookmarks-tab tab-active' : 'bookmarks-tab')}
        >
          Watchlist
        </NavLink>
        {/* <NavLink
          to='/custom-lists'
          className={({ isActive }) => (isActive ? 'bookmarks-tab tab-active' : 'bookmarks-tab')}
        >
          Custom Lists
        </NavLink> */}
        <NavLink
          to='/history'
          className={({ isActive }) => (isActive ? 'bookmarks-tab tab-active' : 'bookmarks-tab')}
        >
          History
        </NavLink>
      </div>
    </>
  );
}

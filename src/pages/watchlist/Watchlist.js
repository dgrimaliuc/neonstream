import './watchlist.css';

import { BookmarksTabs } from '../../components/bookmarks-tabs';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';
import BrowseCard from '../../components/browse-card/browse-card';
import { useWatchlist } from '../../hooks';
import { useMemo } from 'react';
import { BookmarksEmptyContainer } from '../../components/bookmarks-empty-container';

export default function WatchlistPage() {
  const { watchlist, clear } = useWatchlist({});
  const cards = useMemo(() => Object.values(watchlist), [watchlist]);

  return (
    <BookmarksWrapper>
      <BookmarksTabs />
      <div className='watchlist-header'>
        <h4>Recent activity</h4>
        <button className='clear-history' onClick={clear}>
          <span>Clear all</span>
        </button>
      </div>
      {cards && cards.length > 0 ? (
        <div className='watchlist-content-box'>
          {cards.map((card, i) => (
            <BrowseCard key={i} {...card} />
          ))}
        </div>
      ) : (
        <BookmarksEmptyContainer />
      )}
    </BookmarksWrapper>
  );
}

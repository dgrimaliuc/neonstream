import './watchlist.css';

import { BookmarksHeader } from '../../components/bookmarks-header';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';
import BrowseCard from '../../components/browse-card/browse-card';
import { useWatchlist } from '../../hooks';

export default function WatchlistPage() {
  const { watchlist } = useWatchlist({});
  console.log(Object.entries(watchlist).map(item => item[0]));
  // watchlist
  return (
    <BookmarksWrapper>
      <BookmarksHeader />
      <div className='watchlist-content-box'>
        <BrowseCard />
      </div>
    </BookmarksWrapper>
  );
}

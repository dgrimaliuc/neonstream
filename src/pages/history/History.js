import './history.css';

import { EpisodeCard } from '../../components/episode-card';
import { BookmarksTabs } from '../../components/bookmarks-tabs';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';
import { BookmarksEmptyContainer } from '../../components/bookmarks-empty-container';

export default function HistoryPage() {
  return (
    <BookmarksWrapper>
      <BookmarksTabs />
      <div className='history-content-box'>
        {/* <EpisodeCard showProgress={true} showIcon={true} /> */}
        <BookmarksEmptyContainer />
      </div>
    </BookmarksWrapper>
  );
}

import './history.css';

import { EpisodeCard } from '../../components/episode-card';
import { BookmarksHeader } from '../../components/bookmarks-header';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';

export default function WatchlistPage() {
  return (
    <BookmarksWrapper>
      <BookmarksHeader />
      <div className='history-content-box'>
        {Array.from({ length: 15 }).map((_, i) => (
          <EpisodeCard key={i} showProgress={true} showIcon={true} />
        ))}
      </div>
    </BookmarksWrapper>
  );
}

import './history.css';

import { BookmarksTabs } from '../../components/bookmarks-tabs';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';
import { BookmarksEmptyContainer } from '../../components/bookmarks-empty-container';
import { OrderedMap } from '../../utils/orderedMap';
import { useSelector } from 'react-redux';
import { historyActions, historyContent } from '../../store';
import { PlayableCard } from '../../components/playable-card';
import { useMemo } from 'react';
import { useDispatchAction } from '../../hooks/useDispatchAction';

export default function HistoryPage() {
  const history = useSelector(historyContent);
  const cards = useMemo(() => new OrderedMap(history).getOrdered(), [history]);
  const dispatch = useDispatchAction(historyActions);

  return (
    <BookmarksWrapper>
      <BookmarksTabs />
      <div className='watchlist-header'>
        <h4>Recent activity</h4>
        <button className='clear-history' onClick={dispatch.clear()}>
          <span>Clear all</span>
        </button>
      </div>
      <div className='history-content-box'>
        {cards.length === 0 && <BookmarksEmptyContainer />}
        {cards.length > 0 &&
          cards.map((card, i) => (
            <PlayableCard
              key={i}
              showProgress
              title={card.title}
              date={card.date}
              to={'card'}
              {...card}
            />
          ))}
      </div>
    </BookmarksWrapper>
  );
}

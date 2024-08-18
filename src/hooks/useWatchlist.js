import { useMemo } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

import { watchlistActions, watchlistContent } from '../store';
import { useDispatchAction } from './useDispatchAction';
import { useSelector } from 'react-redux';

export function useWatchlist(props) {
  const dispatch = useDispatchAction(watchlistActions);

  const { media, id } = props || { media: null, id: null };
  const watchlist = useSelector(watchlistContent);
  const isInWatchlist = useMemo(() => !!watchlist[[`${media}-${id}`]], [watchlist, media, id]);

  const add = data => {
    dispatch.add({ data, media, id })();
  };

  const remove = () => {
    dispatch.remove({ media, id })();
  };

  const clear = () => {
    dispatch.clear()();
  };

  return { add, remove, clear, isInWatchlist, watchlist };
}

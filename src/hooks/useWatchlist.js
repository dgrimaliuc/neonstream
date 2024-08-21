import { useMemo } from 'react';
import { watchlistActions, watchlistContent } from '../store';
import { useDispatchAction } from './useDispatchAction';
import { useSelector } from 'react-redux';
import useLocalStorageSync from './useLocalStorageSync';
import { WATCHLIST } from '../data/constants';

export function useWatchlist(props) {
  const dispatch = useDispatchAction(watchlistActions);

  const { media, id } = props || { media: null, id: null };
  const watchlist = useSelector(watchlistContent);
  const isInWatchlist = useMemo(() => !!watchlist[[`${media}-${id}`]], [watchlist, media, id]);

  useLocalStorageSync(WATCHLIST, dispatch.setWatchlist);

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

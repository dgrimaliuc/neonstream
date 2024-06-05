import { useMemo } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export function useWatchlist({ media, id }) {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', {});

  const isInWatchlist = useMemo(() => !!watchlist[[`${media}-${id}`]], [watchlist, media, id]);

  const add = () => {
    setWatchlist(prev => ({ ...prev, [`${media}-${id}`]: true }));
  };

  const remove = () => {
    setWatchlist(prev => ({ ...prev, [`${media}-${id}`]: undefined }));
  };

  return { add, remove, isInWatchlist, watchlist };
}

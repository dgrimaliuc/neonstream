import { useMemo } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export function useWatchlist(props) {
  const { media, id } = props || { media: null, id: null };
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', {});

  const isInWatchlist = useMemo(() => !!watchlist[[`${media}-${id}`]], [watchlist, media, id]);

  const add = data => {
    setWatchlist(prev => ({
      ...prev,
      [`${media}-${id}`]: {
        title: data.title || data.name,
        poster: data.poster_path,
        date: data.release_date || data.first_air_date,
        media_type: media,
        id,
      },
    }));
  };

  const remove = () => {
    setWatchlist(prev => ({ ...prev, [`${media}-${id}`]: undefined }));
  };

  const clear = () => {
    setWatchlist({});
  };

  return { add, remove, clear, isInWatchlist, watchlist };
}

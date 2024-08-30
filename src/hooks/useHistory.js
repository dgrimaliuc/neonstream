import { historyActions, historyContent } from '../store';
import { useDispatchAction } from './useDispatchAction';
import { useSelector } from 'react-redux';
import useLocalStorageSync from './useLocalStorageSync';
import { HISTORY } from '../data/constants';
import { useLoaderData } from 'react-router-dom';
import { useCallback } from 'react';

export function useHistory({ ref }) {
  const data = useLoaderData();
  const dispatch = useDispatchAction(historyActions);
  const { media_type, id } = data;

  const history = useSelector(historyContent);

  useLocalStorageSync(HISTORY, dispatch.setHistory);

  const savePlayhead = progress => {
    dispatch.save({
      data,
      progress: progress,
      isFullyWatched: (progress * 100) / ref.current.getDuration() > 93,
    })();
  };

  const getPlayhead = useCallback(() => {
    return history[`${media_type}-${id}`];
  }, [history, id, media_type]);

  const removePlayhead = () => {
    dispatch.remove(data)();
  };

  const clearPlayhead = () => {
    // dispatch.clear()();
  };

  return { savePlayhead, removePlayhead, clearPlayhead, getPlayhead };
}

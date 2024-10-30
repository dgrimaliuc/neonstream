import { historyActions, historyContent } from '../store';
import { useDispatchAction } from './useDispatchAction';
import { useSelector } from 'react-redux';
import useLocalStorageSync from './useLocalStorageSync';
import { HISTORY } from '../data/constants';
import { useLoaderData } from 'react-router-dom';
import { useCallback } from 'react';
import { OrderedMap } from '../utils/orderedMap';

export function useHistory({ content, ref }) {
  const data = useLoaderData();
  const dispatch = useDispatchAction(historyActions);
  const { media_type, id } = data;

  const history = useSelector(historyContent);

  useLocalStorageSync(HISTORY, dispatch.syncHistory);

  const savePlayhead = useCallback(
    progress => {
      dispatch.set({
        data,
        content,
        progress: progress,
        isFullyWatched: (progress * 100) / ref.current.getDuration() > 93,
        watched: +((progress * 100) / ref.current.getDuration()).toFixed(2),
      })();
    },
    [content, data, dispatch, ref],
  );

  const getPlayhead = useCallback(() => {
    const playhead = new OrderedMap(history).get(`${media_type}-${id}`);
    if (playhead && !playhead?.isFullyWatched) {
      return playhead;
    }
  }, [history, id, media_type]);

  const removePlayhead = () => {
    dispatch.remove(data)();
  };

  const clearPlayhead = () => {
    // dispatch.clear()();
  };

  const saveCurrentTime = useCallback(() => {
    if (ref.current) {
      savePlayhead(ref.current.getCurrentTime());
    }
    // added ref to dependencies
  }, [ref, savePlayhead]);

  return { savePlayhead, removePlayhead, clearPlayhead, getPlayhead, saveCurrentTime };
}

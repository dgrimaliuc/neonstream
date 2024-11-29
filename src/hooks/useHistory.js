import { historyActions, historyContent, upNextActions } from '../store';
import { useDispatchAction } from './useDispatchAction';
import { useSelector } from 'react-redux';
import useLocalStorageSync from './useLocalStorageSync';
import { HISTORY, TV } from '../data/constants';
import { useLoaderData } from 'react-router-dom';
import { useCallback } from 'react';
import { OrderedMap } from '../utils/orderedMap';

export function useHistory({ content, ref }) {
  const data = useLoaderData();

  const upNextDispatch = useDispatchAction(upNextActions);
  const historyDispatch = useDispatchAction(historyActions);
  const { media_type, id } = data;

  const history = useSelector(historyContent);

  useLocalStorageSync(HISTORY, historyDispatch.syncHistory);

  const savePlayhead = useCallback(
    progress => {
      if (content.media_type === TV) {
        upNextDispatch.set(content)();
      }
      historyDispatch.set({
        data,
        content,
        progress: progress,
        isFullyWatched: (progress * 100) / ref.current.getDuration() > 93,
        watched: +((progress * 100) / ref.current.getDuration()).toFixed(2),
      })();
    },
    [content, data, historyDispatch, ref, upNextDispatch],
  );

  const getPlayhead = useCallback(() => {
    const playhead = new OrderedMap(history).get(`${media_type}-${id}`);
    if (playhead && !playhead?.isFullyWatched) {
      return playhead;
    }
  }, [history, id, media_type]);

  const removePlayhead = () => {
    historyDispatch.remove(data)();
  };

  const clearPlayhead = () => {
    // dispatch.clear()();
  };

  const saveCurrentTime = useCallback(() => {
    if (ref.current) {
      savePlayhead(ref.current.getCurrentTime());
    }
  }, [ref, savePlayhead]);

  return { savePlayhead, removePlayhead, clearPlayhead, getPlayhead, saveCurrentTime };
}

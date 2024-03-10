import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useObserver } from './useObserver';
import { browseContentActions } from '../store';
import { browseActions } from '../actions';
import { useThrottlingQuery } from './';
const { incrementPage, setInitial, addContent } = browseContentActions;

export function useBrowseLoader(mode) {
  const dispatch = useDispatch();
  const { page, content } = useSelector((state) => state.browseContent[mode]);

  const observer = useObserver('.loader', () => {
    dispatch(incrementPage({ mode }));
  });

  const { loading, data, error } = useThrottlingQuery(
    useCallback(async () => await browseActions[mode]({ page }), [mode, page])
  );

  useEffect(() => {
    if (data) {
      dispatch(addContent({ mode, content: data }));
      observer.observe();
    }
  }, [data, dispatch, mode, observer]);

  useEffect(() => {
    return () => {
      dispatch(setInitial({ mode }));
      observer.disconnect();
    };
  }, [dispatch, mode, observer]);

  return { content, page, loading, error };
}

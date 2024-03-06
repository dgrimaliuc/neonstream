import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useObserver } from './useObserver';
import { browseContentActions } from '../store';
import browseActions from '../actions/browse';
import { useQuery } from './useQuery';
const { incrementPage, setInitial, addContent } = browseContentActions;

export function useBrowseLoader(mode) {
  const dispatch = useDispatch();
  const { page, content } = useSelector((state) => state.browseContent[mode]);

  const observer = useObserver('.loader', () => {
    dispatch(incrementPage({ mode }));
  });

  const { loading, data, error } = useQuery(
    useCallback(async () => await browseActions[mode]({ page }), [mode, page])
  );

  useEffect(() => {
    if (data) {
      dispatch(addContent({ mode, content: data }));
      observer.observe();
    }
  }, [data, dispatch, mode, observer]);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      dispatch(setInitial({ mode }));
      observer.disconnect();
    };
  }, [dispatch, mode, observer]);

  return { content, page, loading, error };
}

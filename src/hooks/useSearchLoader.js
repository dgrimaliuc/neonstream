import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useObserver } from './useObserver';
import { searchActions } from '../store';
import { searchActions as searchApiActions } from '../actions';
import { useDebounceQuery } from '.';
const { incrementPage, setInitial, addResults, setHasResults } = searchActions;

export function useSearchLoader(mode, query) {
  const dispatch = useDispatch();
  const { page, results, total_pages, total_results, hasResults } = useSelector(
    state => state.search[mode],
  );

  const { loading, data, error } = useDebounceQuery(
    useCallback(async () => {
      if (query) {
        return await searchApiActions[mode]({ query, page });
      }
    }, [mode, page, query]),
    500,
  );

  const observer = useObserver(
    {
      css: '.loader',
      observeOnMount: false,
      disconnectOnObserve: true,
    },
    () => dispatch(incrementPage({ mode })),
  );

  useEffect(() => {
    dispatch(setInitial({ mode }));
  }, [dispatch, mode, query]);

  useEffect(() => {
    if (results.length === 0 && page > 1) {
      dispatch(setInitial({ mode }));
    }
  }, [dispatch, mode, page, results.length]);

  useEffect(() => {
    if (!data) return;
    if (data.results.length > 0) {
      dispatch(addResults({ mode, ...data }));
    } else {
      dispatch(setHasResults({ mode, hasResults: false }));
    }
  }, [data, dispatch, mode, observer]);

  /*
  In order to not make two requests when browse page is loading
  */
  useEffect(() => {
    if (results.length > 0 && page < total_pages && !loading) {
      observer.observe();
    }
  }, [loading, observer, page, results.length, total_pages]);

  return { results, page, loading, error, total_pages, total_results, hasResults };
}

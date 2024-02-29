import { useEffect } from 'react';
import { makeCancelable, sleep } from '../utils';

import { useDispatch, useSelector } from 'react-redux';
import { useObserver } from './useObserver';
import { browseContentActions } from '../store';
import browseActions from '../actions/browse';
const { incrementPage, setInitial, addContent } = browseContentActions;

export function useBrowseLoader(mode) {
  const dispatch = useDispatch();
  const { page, content } = useSelector((state) => state.browseContent[mode]);

  const observer = useObserver('.loader', () => {
    dispatch(incrementPage({ mode }));
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      dispatch(setInitial({ mode }));
      observer.disconnect();
    };
  }, [dispatch, mode, observer]);

  useEffect(() => {
    let promise = makeCancelable(
      sleep(1000).then(() => browseActions[mode]({ page }))
    );

    promise.then((res) => {
      dispatch(addContent({ mode, content: res }));
      observer.observe();
    });
    return () => {
      promise.cancel();
    };
  }, [dispatch, mode, observer, page]);

  return { content, page };
}

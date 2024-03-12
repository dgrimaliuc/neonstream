import { useCallback, useEffect, useState } from 'react';
import { makeCancelable } from '../utils';
import { useDebounce } from './useDebounce';

export function useDebounceQuery(asyncFetch = async () => {}, timeout = 500) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetcher = useDebounce(
    useCallback(async (promise, asyncFetch, isMounted) => {
      try {
        setLoading(true);
        promise = makeCancelable(asyncFetch());
        const result = await promise;
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }, []),
    timeout
  );

  useEffect(() => {
    let isMounted = true;
    let promise = null;
    fetcher(promise, asyncFetch, isMounted);

    return () => {
      if (promise) {
        promise.cancel();
      }
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncFetch, timeout]);

  return { loading, data, error };
}

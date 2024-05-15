import { useCallback, useEffect, useRef, useState } from 'react';
import { makeCancelable } from '../utils';
import { useDebounce } from './useDebounce';

export function useDebounceQuery(asyncFetch = async () => {}, timeout = 500) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const promise = useRef(makeCancelable());

  const fetcher = useDebounce(
    useCallback(async (asyncFetch, isMounted) => {
      try {
        setLoading(true);
        promise.current = makeCancelable(asyncFetch());
        const result = await promise.current;
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
    timeout,
  );

  useEffect(() => {
    let isMounted = true;
    fetcher(asyncFetch, isMounted);

    return () => {
      if (promise.current) {
        promise.current.cancel();
      }
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncFetch, timeout]);

  return { loading, data, error };
}

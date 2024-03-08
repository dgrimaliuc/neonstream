import { useState, useEffect, useRef } from 'react';
import { debounce, makeCancelable } from '../utils';

export function useQuery(queryFunction) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let promise = null;

    const fetchData = async () => {
      try {
        setLoading(true);
        promise = makeCancelable(queryFunction());
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
    };

    fetchData();

    return () => {
      isMounted = false;
      if (promise) {
        promise.cancel();
      }
    };
  }, [queryFunction]);

  return { loading, data, error };
}

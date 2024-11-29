import { useState, useEffect } from 'react';
import { makeCancelable } from '../utils';

export function useQuery(queryFunction) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let promise = null;

    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
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

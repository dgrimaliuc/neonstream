import { useState, useEffect, useRef } from 'react';
import { makeCancelable } from '../utils';

export function useQuery(queryFunction) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const loadingRef = useRef(false);
  const loadingQueueRef = useRef([]);

  useEffect(() => {
    let isMounted = true;
    const promise = makeCancelable(queryFunction());
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await promise;
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        // Remove the first item from the loading queue
        loadingQueueRef.current.shift();
        // Check if there are pending requests in the loading queue
        if (loadingQueueRef.current.length > 0) {
          // If there are, initiate the next request
          const nextQueryFunction = loadingQueueRef.current[0];
          setLoading(true);
          await fetchDataWrapper(nextQueryFunction);
        } else {
          // If there are no pending requests, set loading to false
          setLoading(false);
        }
      }
    };

    const fetchDataWrapper = async (queryFunction) => {
      // Add the queryFunction to the loading queue
      loadingQueueRef.current.push(queryFunction);
      // Check if this is the only request in the loading queue
      if (loadingQueueRef.current.length === 1) {
        // If it is, initiate the request
        await fetchData();
      }
    };

    fetchDataWrapper(queryFunction);

    return () => {
      isMounted = false;
      promise.cancel();
      loadingQueueRef.current = [];
    };
  }, [queryFunction]);

  return { loading, data, error };
}

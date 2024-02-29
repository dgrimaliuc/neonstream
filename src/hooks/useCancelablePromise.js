import { useEffect, useState } from 'react';
import { as_noop, makeCancelable } from '../utils';

export function useCancelablePromise(fc, params) {
  const [promise, setPromise] = useState(makeCancelable(fc(params)));

  useEffect(() => {
    return () => {
      if (promise) {
        promise.cancel();
      }
    };
  }, [fc, promise]);

  return { promise, setPromise };
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import { Observer } from '../utils/observer';

export function useObserver({ css, observeOnMount = true }, onObserve) {
  const observer = useMemo(() => {
    return new Observer(() => document.querySelector(css), onObserve);
  }, [css]);

  useEffect(() => {
    if (observeOnMount) {
      observer.observe();
    }
    return () => observer.disconnect();
  }, [observer]);
  return observer;
}

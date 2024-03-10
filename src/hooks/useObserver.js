/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import { Observer } from '../utils/observer';

export function useObserver(cssSelector, onObserve) {
  const observer = useMemo(() => {
    return new Observer(() => document.querySelector(cssSelector), onObserve);
  }, [cssSelector]);

  useEffect(() => {
    observer.observe();
    return () => observer.disconnect();
  }, [observer]);
  return observer;
}

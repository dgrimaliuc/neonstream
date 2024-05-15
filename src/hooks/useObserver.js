/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import { Observer } from '../utils/observer';
import { useThrottling } from './useThrottling';

export function useObserver(
  { css, observeOnMount = true, disconnectOnObserve = false },
  onObserve,
) {
  const throttledOnObserve = useThrottling(
    useMemo(() => onObserve, []),
    800,
  );

  const observer = useMemo(() => {
    return new Observer(() => document.querySelector(css), throttledOnObserve, disconnectOnObserve);
  }, [css]);

  useEffect(() => {
    if (observeOnMount) {
      observer.observe();
    }
    return () => observer.disconnect();
  }, [observer]);
  return observer;
}

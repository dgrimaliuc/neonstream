/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import { Observer } from '../utils/observer';
import { useThrottling } from './useThrottling';

export function useObserver(
  { css, ref, observeOnMount = true, disconnectOnObserve = false },
  onObserve,
) {
  const throttledOnObserve = useThrottling(
    useMemo(() => onObserve, []),
    800,
  );

  const findElement = css ? () => document.querySelector(css) : () => ref.current;
  const observer = useMemo(() => {
    return new Observer(findElement, throttledOnObserve, disconnectOnObserve);
  }, [ref]);

  useEffect(() => {
    if (observeOnMount) {
      observer.observe();
    }
    return () => observer.disconnect();
  }, [observer]);
  return observer;
}

import { useEffect } from 'react';
import { throttling } from '../utils';
import { useCustomRef } from './useCustomRef';

export function useThrottling(initialFunction, timeout) {
  const [throttlingFunction, setThrottlingFunction] =
    useCustomRef(initialFunction);

  useEffect(() => {
    setThrottlingFunction(throttling(initialFunction, timeout));
  }, [initialFunction, setThrottlingFunction, timeout]);

  return throttlingFunction;
}

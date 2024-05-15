import { useMemo } from 'react';
import { throttling } from '../utils';

export function useThrottling(initialFunction, timeout) {
  return useMemo(() => throttling(initialFunction, timeout), [initialFunction, timeout]);
}

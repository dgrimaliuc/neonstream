import { useMemo } from 'react';
import { debounce } from '../utils';

export function useDebounce(initialFunction, timeout) {
  return useMemo(() => debounce(initialFunction, timeout), [initialFunction, timeout]);
}

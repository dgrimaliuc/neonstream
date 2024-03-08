import { useEffect } from 'react';
import { debounce } from '../utils';
import { useCustomRef } from './useCustomRef';

export function useDebounce(initialFunction, timeout) {
  const [debounceFunction, setDebounceFunction] = useCustomRef(initialFunction);

  useEffect(() => {
    setDebounceFunction(debounce(initialFunction, timeout));
  }, [initialFunction, setDebounceFunction, timeout]);

  return debounceFunction;
}

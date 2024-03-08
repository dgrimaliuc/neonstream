import { useCallback, useRef } from 'react';

export function useCustomRef(initial) {
  const ref = useRef(initial);

  const setRef = useCallback((value) => {
    ref.current = value;
  }, []);

  return [ref.current, setRef];
}

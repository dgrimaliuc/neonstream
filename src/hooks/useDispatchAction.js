import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function useDispatchAction(action) {
  const dispatch = useDispatch();
  return useMemo(() => {
    let obj = {};
    for (let key in action) {
      if (typeof action[key] === 'function') {
        obj[key] = (...args) => dispatch.bind(this, action[key](...args));
      }
    }
    return obj;
  }, [dispatch, action]);
}

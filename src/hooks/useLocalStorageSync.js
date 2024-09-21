import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../store';

import isEqual from 'lodash/isEqual';

const useLocalStorageSync = (key, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const syncState = event => {
      if (event.key === `persist:root`) {
        const persistedState = JSON.parse(event.newValue);
        const currentState = store.getState();

        if (persistedState && persistedState[key]) {
          const newState = JSON.parse(persistedState[key]);

          if (!isEqual(currentState[key], newState)) {
            dispatch(action(newState)());
          }
        }
      }
    };

    window.addEventListener('storage', syncState);

    return () => {
      window.removeEventListener('storage', syncState);
    };
  }, [dispatch, key, action]);
};

export default useLocalStorageSync;

import { useEffect } from 'react';

export function useDelayedAction(action, timeout) {
  useEffect(() => {
    const timer = setTimeout(() => {
      action();
    }, timeout);

    return () => clearTimeout(timer);
  }, [action, timeout]);
}

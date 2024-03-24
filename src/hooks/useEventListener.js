import { useEffect } from 'react';

export function useEventListener(
  eventName,
  handler,
  deps = [],
  element = window
) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [handler, eventName, element, deps]);
}

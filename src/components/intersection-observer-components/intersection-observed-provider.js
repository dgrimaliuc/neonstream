import { useCallback, useEffect, useState } from 'react';

export default function IntersectionObservedProvider({ root, children }) {
  const [observer, setObserver] = useState(null);
  const [visibilityMap, setVisibilityMap] = useState(new Map());

  const observe = useCallback(
    el => {
      if (observer) {
        setVisibilityMap(prevMap => new Map(prevMap).set(el, true));
        observer.observe(el);
      }
    },
    [observer],
  );

  const unobserve = useCallback(
    el => {
      if (observer) {
        setVisibilityMap(prevMap => {
          const map = new Map(prevMap);

          map.delete(el);

          return map;
        });
        observer.unobserve(el);
      }
    },
    [observer],
  );

  const callback = useCallback(
    entries =>
      setVisibilityMap(prevMap => {
        const map = new Map(prevMap);

        entries.forEach(({ target, isIntersecting }) => map.set(target, isIntersecting));
        return map;
      }),
    [],
  );

  useEffect(() => {
    let newObserver;

    if (root.current) {
      newObserver = new IntersectionObserver(callback, {
        root: root.current,
        rootMargin: '0px -1px',
        threshold: 0.5,
      });

      setObserver(newObserver);
    }
    return () => newObserver && newObserver.disconnect();
  }, [callback, setObserver, root]);

  return children(observe, unobserve, visibilityMap);
}

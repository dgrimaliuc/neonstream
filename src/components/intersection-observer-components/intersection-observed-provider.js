import { useCallback, useEffect, useState } from 'react';

export default function IntersectionObservedProvider({ root, refVisibilityMap, children }) {
  const [observer, setObserver] = useState(null);
  const [visibilityMap, setVisibilityMap] = useState(new Map());

  const observe = useCallback(
    el => {
      if (observer) {
        setVisibilityMap(prevMap => new Map(prevMap).set(el, true));
        observer.observe(el);
      }
    }, //s
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

  useEffect(() => {
    if (refVisibilityMap) {
      refVisibilityMap.current = visibilityMap;
    }
  }, [visibilityMap, refVisibilityMap]);

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

    if (root) {
      newObserver = new IntersectionObserver(callback, {
        root,
        rootMargin: '0px -1px',
        threshold: 0.5,
      });

      setObserver(newObserver);
    }
    return () => newObserver && newObserver.disconnect();
  }, [callback, setObserver, root]);

  return children(observe, unobserve, visibilityMap);
}

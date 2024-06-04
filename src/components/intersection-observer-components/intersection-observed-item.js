import { useEffect, useRef } from 'react';

export default function IntersectionObservedItem({ children, observe, unobserve, visibilityMap }) {
  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      observe(current);
    }
    return () => {
      unobserve(current);
    };
  }, [observe, unobserve]);

  const isVisible =
    visibilityMap.get(ref.current) === undefined ? true : visibilityMap.get(ref.current);

  useEffect(() => {
    if (ref?.current) {
      if (isVisible) {
        ref.current.removeAttribute('inert', '');
      } else {
        ref.current.setAttribute('inert', '');
      }
    }
  }, [isVisible]);

  return children(ref, isVisible);
}

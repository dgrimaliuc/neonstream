import { useEffect, useMemo, useState } from 'react';

export function useBoundingView(ref, parentRef, threshold = 0.7) {
  const [isInView, setIsInView] = useState(true);

  const observer = useMemo(() => {
    return new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        root: parentRef ? parentRef.current : null,
        rootMargin: '0px -1px',
        threshold: [threshold],
      },
    );
  }, [parentRef, threshold]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, observer, threshold]);

  return { isInView };
}

import { useEffect, useState } from 'react';

export function useChildrenSize(isLoading, children) {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading && children.length === 0) {
        setIsEmpty(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [children, isLoading]);

  return { isEmpty };
}

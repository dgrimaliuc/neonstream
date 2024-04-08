import { useEffect, useState } from 'react';

export function useRendingImage(processImage = () => {}) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    processImage(setImg);
  }, [processImage]);

  return { img };
}

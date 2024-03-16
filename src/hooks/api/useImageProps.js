import { useMemo } from 'react';

export function useImageProps() {
  const extraParams = useMemo(() => {
    return {
      append_to_response: 'images',
      language: 'en-US',
      include_image_language: 'en',
    };
  }, []);
  return extraParams;
}

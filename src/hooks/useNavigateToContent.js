import { useEffect, useState } from 'react';

export function useNavigateToContent(mediaType, id) {
  const [to, setTo] = useState('/');

  useEffect(() => {
    switch (mediaType) {
      case 'movie':
        return setTo(`/${mediaType}/${id}`);
      case 'tv':
        return setTo(`/tv/${id}/watch/1/1`);

      default:
        console.error('Invalid media type: ', mediaType);
    }
  }, [mediaType, id]);

  return to;
}

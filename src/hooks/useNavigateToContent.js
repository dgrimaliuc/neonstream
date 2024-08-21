import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNavigateToContent(mediaType, id) {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    switch (mediaType) {
      case 'movie':
        return navigate(`/${mediaType}/${id}`);
      case 'tv':
        return navigate(`/tv/${id}/watch/1/1`);

      default:
        console.error('Invalid media type: ', mediaType);
    }
  }, [id, mediaType, navigate]);

  return navigateTo;
}

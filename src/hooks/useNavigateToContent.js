import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { upNextContent } from '../store';
import { TV } from '../data/constants';

export function useNavigateToContent(mediaType, id) {
  const navigate = useNavigate();
  const upNext = useSelector(upNextContent);

  const navigateTo = useCallback(() => {
    switch (mediaType) {
      case 'movie':
        return navigate(`/${mediaType}/${id}`);
      case 'tv':
        if (upNext && upNext[`${TV}-${id}`]) {
          const { season_number, episode_number } = upNext[`${TV}-${id}`];
          return navigate(`/tv/${id}/watch/${season_number}/${episode_number}`);
        }
        return navigate(`/tv/${id}/watch/1/1`);

      default:
        console.error('Invalid media type: ', mediaType);
    }
  }, [id, mediaType, navigate, upNext]);

  return navigateTo;
}

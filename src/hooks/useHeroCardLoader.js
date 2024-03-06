import { useCallback } from 'react';
import contentDetailsActions from '../actions/content-details';
import { useQuery } from './useQuery';
import { MOVIE, TV } from '../data/constants';

export function useHeroCardLoader(id, mediaType) {
  if (mediaType !== MOVIE && mediaType !== TV) {
    throw new Error(
      `Invalid media type: ${mediaType}. Must be either ${MOVIE} or ${TV}`
    );
  }

  const { loading, data, error } = useQuery(
    useCallback(
      async () => await contentDetailsActions[mediaType](id),
      [id, mediaType]
    )
  );

  return { loading, data, error };
}

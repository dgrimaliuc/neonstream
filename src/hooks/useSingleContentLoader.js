import { useCallback } from 'react';
import { contentDetailsActions } from '../actions';
import { useQuery } from './useQuery';
import { validateContentType } from '../utils';

export function useSingleContentLoader(id, mediaType, extraParams) {
  validateContentType(mediaType);

  const { loading, data, error } = useQuery(
    useCallback(
      async () => await contentDetailsActions[mediaType](id, extraParams),
      [id, mediaType, extraParams]
    )
  );

  return { loading, data, error };
}

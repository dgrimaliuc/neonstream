import { useCallback } from 'react';
import { contentDetailsActions } from '../actions';
import { useQuery } from './useQuery';
import { validateContentType } from '../utils';

export function useSingleContentLoader(id, mediaType, extraParams) {
  // to use useImagesLoader based on some param which will trigger using it (think about implementation)
  validateContentType(mediaType);

  const { loading, data, error } = useQuery(
    useCallback(
      async () => await contentDetailsActions[mediaType](id, extraParams),
      [extraParams, id, mediaType]
    )
  );

  return { loading, data, error };
}

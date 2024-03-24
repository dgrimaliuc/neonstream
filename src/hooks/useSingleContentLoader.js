import { useCallback } from 'react';
import { contentDetailsActions } from '../actions';
import { useQuery } from './useQuery';
import { validateContentType } from '../utils';
import { imageProps } from '../api';

const imageParams = imageProps();

export function useSingleContentLoader(id, mediaType) {
  validateContentType(mediaType);

  const { loading, data, error } = useQuery(
    useCallback(
      async () => await contentDetailsActions[mediaType](id, imageParams),
      [id, mediaType]
    )
  );

  return { loading, data, error };
}

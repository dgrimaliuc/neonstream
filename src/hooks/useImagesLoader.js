import { useCallback } from 'react';
import { imagesActions } from '../actions';
import { useQuery } from './useQuery';
import { validateContentType } from '../utils';

// move to api-props folder because this hook will not make any request, just provide parameters based on selected language
// Add providing required params to the hook
export function useImagesLoader(id, mediaType) {
  validateContentType(mediaType);

  const { loading, data, error } = useQuery(
    useCallback(async () => await imagesActions[mediaType](id), [id, mediaType])
  );

  return { loading, data, error };
}

import { useCallback } from 'react';
import { useQuery } from './useQuery';
import { getSources } from '../services/cms';

export default function useStream(content, translation) {
  const queryFunction = useCallback(() => {
    if (!translation) {
      return null;
    }
    return getSources({ content, translation });
  }, [content, translation]);

  const {
    loading: streamIsLoading,
    data: streamData,
    error: streamError,
  } = useQuery(queryFunction);

  return { streamIsLoading, streamData, streamError };
}

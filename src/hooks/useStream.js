import { useCallback } from 'react';
import { useQuery } from './useQuery';
import { getStream } from '../services/cms';

export default function useStream(content, translations, selected) {
  const queryFunction = useCallback(() => {
    if (!translations || !translations[selected]) {
      return null;
    }
    return getStream({ content, translation: translations[selected] });
  }, [content, translations, selected]);

  const {
    loading: streamIsLoading,
    data: streamData,
    error: streamError,
  } = useQuery(queryFunction);

  return { streamIsLoading, streamData, streamError };
}

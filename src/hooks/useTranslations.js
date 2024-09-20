import { useCallback, useState } from 'react';
import { useQuery } from './useQuery';
import { getTranslations } from '../services/cms';

export default function useTranslations(content) {
  const [selected, setSelected] = useState(0);
  const queryFunction = useCallback(() => {
    return getTranslations(content);
  }, [content]);

  const {
    loading: isTranslationsLoading,
    data: translationsData,
    error: translationsError,
  } = useQuery(queryFunction);

  return { isTranslationsLoading, translationsData, translationsError, selected, setSelected };
}

import { useCallback } from 'react';
import { contentDetailsActions } from '../actions';
import { imageProps } from '../api';
import { MULTIPLE } from '../data/constants';
import { useQuery } from './useQuery';

const imageParams = imageProps();

export function useMultipleContentLoader(objects) {
  const { loading, data, error } = useQuery(
    useCallback(async () => await contentDetailsActions[MULTIPLE](objects, imageParams), []),
  );

  return { loading, data, error };
}

import { useState } from 'react';
import { splitArray } from '../utils';

export function useSplitArray(array, chunkSize) {
  const [loadIndex, setLoadIndex] = useState(1);
  const chunks = splitArray(array, chunkSize);

  const loadMore = () => setLoadIndex((prev) => prev + 1);

  const isEnd = loadIndex >= chunks.length;
  return { chunks, loadIndex, loadMore, isEnd };
}

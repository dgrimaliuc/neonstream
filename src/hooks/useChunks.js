import { useState } from 'react';
import { createChunks } from '../utils';

export function useChunks(array, chunkSize = 1) {
  const [loadIndex, setLoadIndex] = useState(1);
  const chunks = createChunks(array, chunkSize);
  const loadMore = () => {
    setLoadIndex(prev => prev + 1);
  };
  const isEnd = chunks.length <= loadIndex;

  return { chunks, loadIndex, loadMore, isEnd, setLoadIndex };
}

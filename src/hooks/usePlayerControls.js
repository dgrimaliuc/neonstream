import { useState, useCallback, useEffect } from 'react';
import { smoothScrollTo } from '../utils';

export function usePlayerControls({
  savePlayhead,
  getPlayhead,
  selected,
  isReady,
  setIsReady,
  setIsPlaying,
  isPlaying,
  content,
}) {
  const [shouldSavePlayhead, setShouldSavePlayhead] = useState(true);

  useEffect(() => {
    return () => {
      setIsReady(false);
    };
  }, [selected, setIsReady]);

  useEffect(() => {
    return () => {
      setIsReady(false);
    };
  }, [setIsReady]);

  const saveOnProgress = useCallback(
    progress => isPlaying && savePlayhead(progress?.playedSeconds || progress),
    [isPlaying, savePlayhead],
  );

  const onSeek = useCallback(() => {
    if (shouldSavePlayhead) {
      const id = setTimeout(() => {
        setIsPlaying(true);
      }, 500);

      return () => clearTimeout(id);
    }
  }, [setIsPlaying, shouldSavePlayhead]);

  const handleReady = useCallback(
    player => {
      if (isReady) {
        return;
      }
      const playhead = getPlayhead();
      if (playhead?.progress) {
        if (content?.media_type === 'movie') {
          smoothScrollTo({ id: 'player-section' });
        }

        setShouldSavePlayhead(false);
        player.seekTo(playhead?.progress);
        setShouldSavePlayhead(true);
        setIsReady(true);
      }
    },
    [content?.media_type, getPlayhead, isReady, setIsReady],
  );

  return {
    isReady,
    onSeek,
    handleReady,
    saveOnProgress,
  };
}

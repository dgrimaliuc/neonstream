import { useCallback, useEffect } from 'react';
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
    progress => isPlaying && savePlayhead(progress.playedSeconds),
    [isPlaying, savePlayhead],
  );

  const onSeek = useCallback(() => {
    const id = setTimeout(() => {
      setIsPlaying(true);
    }, 500);

    return () => clearTimeout(id);
  }, [setIsPlaying]);

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

        player.seekTo(playhead?.progress);
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

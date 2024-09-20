import { useState, useCallback, useEffect } from 'react';
import { smoothScrollTo } from '../utils';

export function usePlayerControls({
  ref,
  savePlayhead,
  getPlayhead,
  selected,
  isReady,
  setIsReady,
  setIsPlaying,
  isPLaying,
  content,
}) {
  const [shouldSavePlayhead, setShouldSavePlayhead] = useState(true);

  const saveCurrentTime = useCallback(() => {
    if (ref.current) {
      savePlayhead(ref.current.getCurrentTime());
    }
    // added ref to dependencies
  }, [ref, savePlayhead]);

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
    progress => {
      if (isPLaying) {
        savePlayhead(progress?.playedSeconds || progress);
      }
    },
    [isPLaying, savePlayhead],
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
    isPLaying,
    onSeek,
    handleReady,
    saveOnProgress,
    saveCurrentTime,
  };
}

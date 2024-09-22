import { useState } from 'react';

export default function usePlayerState(saveCurrentTime) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    saveCurrentTime();
    setIsPlaying(false);
  };

  return { isPlaying, setIsPlaying, isReady, setIsReady, handlePlay, handlePause };
}

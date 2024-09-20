import { useState } from 'react';

export default function usePlayerState() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  return { isPlaying, setIsPlaying, handlePlay, handlePause, isReady, setIsReady };
}

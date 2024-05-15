import { useCallback, useState } from 'react';
import { useCustomRef } from './useCustomRef';

export function useStream() {
  const [audioSources, setAudioSources] = useState({});
  const [selectedStream, setSelectedStream] = useState(0);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingRef, setLoadingRef] = useCustomRef(loading);

  const setLoadingState = useCallback(
    isLoading => {
      setLoading(isLoading);
      setLoadingRef(isLoading);
    },
    [setLoading, setLoadingRef],
  );

  return {
    audioSources,
    setAudioSources,
    stream,
    setStream,
    selectedStream,
    loading,
    setLoading,
    error,
    setError,
    setSelectedStream,
    loadingRef,
    setLoadingRef,
    setLoadingState,
  };
}

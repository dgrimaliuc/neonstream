import { useEffect } from 'react';
import { fetchStream, fetchTranslations } from '../api/stream/actions/rezka2';
import { useStream } from './useStream';

export default function useStreams(content) {
  const {
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
    setLoadingState,
  } = useStream();

  useEffect(() => {
    if (!content.episode_number) {
      fetchTranslations({
        content,
        setLoadingState,
        setAudioSources,
      });
    }
  }, [content, setAudioSources, setLoadingState]);

  useEffect(() => {
    if (!content.episode_number) {
      fetchStream({
        content,
        audioSources,
        selectedStream,
        loadingRef,
        setLoading,
        setError,
        setStream,
      });
    }
  }, [
    audioSources,
    content,
    loadingRef,
    selectedStream,
    setError,
    setLoading,
    setStream,
  ]);

  return {
    audioSources,
    stream,
    selectedStream,
    loading,
    error,
    setSelectedStream,
  };
}

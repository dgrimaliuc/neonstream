import { useEffect } from 'react';
import { fetchStream, fetchTranslations } from '../api/stream/actions/rezka2';
import { useStream } from './useStream';
import { useSelector } from 'react-redux';
import { seriesData, seriesTranslations } from '../store/selectors/series';
import { Rezka2 } from '../api/stream';
import { useParams } from 'react-router-dom';

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

  const translations = useSelector(seriesTranslations);
  const persistData = useSelector(seriesData);
  const params = useParams();

  //Series stream setup
  useEffect(() => {
    if (+params.id === persistData.id && !!content.episode_number) {
      if (!audioSources.rezka2 && translations.rezka2) {
        const rezka2 = new Rezka2(content, translations.rezka2.extract);
        setAudioSources({ rezka2 });
      }
    }
  }, [audioSources, content, persistData, params.id, setAudioSources, translations.rezka2]);

  //Movie stream setup
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
    fetchStream({
      content,
      audioSources,
      selectedStream,
      loadingRef,
      setLoading,
      setError,
      setStream,
    });
  }, [audioSources, content, loadingRef, selectedStream, setError, setLoading, setStream]);

  return {
    audioSources,
    stream,
    selectedStream,
    loading,
    error,
    setSelectedStream,
  };
}

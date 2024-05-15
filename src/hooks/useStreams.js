import { useEffect } from 'react';
import { fetchStream, fetchTranslations } from '../api/stream/actions/rezka2';
import { useStream } from './useStream';
import { useSelector } from 'react-redux';
import { seriesData, seriesTranslations } from '../store/selectors/series';
import { Rezka2 } from '../api/stream';
import { useParams } from 'react-router-dom';
import { isObjEmpty } from '../utils';

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
    if (
      +params.id === persistData.id &&
      translations.id === +params.id &&
      !!content.episode_number
    ) {
      if (
        translations.rezka2 &&
        (translations.season_number === +params.season ||
          isObjEmpty(translations.rezka2.extract.seasons))
      ) {
        const rezka2 = new Rezka2(content, translations.rezka2.extract);
        setAudioSources({ rezka2 });
      }
    }
  }, [content, params.id, params.season, persistData.id, setAudioSources, translations]);

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
      setLoadingState,
      setError,
      setStream,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioSources, content, selectedStream, setError, setLoading, setLoadingState, setStream]);

  return {
    audioSources,
    stream,
    selectedStream,
    loading,
    error,
    setSelectedStream,
  };
}

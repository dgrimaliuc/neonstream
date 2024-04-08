import { useEffect, useState } from 'react';
import { sources } from '../api/streams';
import { useLoaderData } from 'react-router-dom';
import { getStreamDuration } from '../api/streams/utils';
import { TRY_ANOTHER_SOURCE_MESSAGE } from '../data/constants';
import { selectMainTrailer } from '../api';
import { useCustomRef } from './useCustomRef';

export default function useStreams(content) {
  const [audioSources, setAudioSources] = useState({});
  const [selectedStream, setSelectedStream] = useState(0);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingRef, setLoadingRef] = useCustomRef(loading);
  const data = useLoaderData();

  useEffect(() => {
    async function fetcher() {
      setLoading(true);
      setLoadingRef(true);
      if (content) {
        const src = await sources(content);
        // rezka sources setup
        if (src.rezka2) {
          await src.rezka2.search();
        }
        setAudioSources(src);
        setLoading(false);
        setLoadingRef(false);
      }
    }
    if (!content.episode_number) {
      fetcher();
    }
  }, [content, setLoadingRef]);

  useEffect(() => {
    async function fetchStream() {
      setLoading(true);
      if (
        audioSources.rezka2 &&
        audioSources.rezka2.extract.voice?.length > 0
      ) {
        setError(null);
        const sources = audioSources.rezka2.extract.voice;
        const voice = sources[selectedStream];
        const foundStream = await audioSources.rezka2.getStream(voice);
        if (foundStream) {
          const duration = await getStreamDuration(foundStream?.stream);
          if (duration > 600) {
            setStream(foundStream);
          } else {
            setError(TRY_ANOTHER_SOURCE_MESSAGE);
          }
        }
      } else {
        const trailer = selectMainTrailer(data.videos);
        if (trailer && !loadingRef)
          setStream(`https://www.youtube.com/watch?v=${trailer?.key}?rel=0`);
      }
      setLoading(false);
    }
    if (!content.episode_number) {
      fetchStream();
    }
  }, [
    audioSources.rezka2,
    content.episode_number,
    data.videos,
    loadingRef,
    selectedStream,
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

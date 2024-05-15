import { getStreamDuration, sources } from '..';
import {
  FAILED_TO_FETCH_MESSAGE,
  NOT_AVAILABLE,
  TRY_ANOTHER_SOURCE_MESSAGE,
} from '../../../data/constants';
import { selectMainTrailer } from '../../';

export async function fetchTranslations(props) {
  const { content, setLoadingState, setAudioSources } = props;
  if (setLoadingState) {
    setLoadingState(true);
  }
  if (content) {
    const src = await sources(content);
    // rezka sources setup
    await src.rezka2.search();
    setAudioSources(src);
    if (setLoadingState) {
      setLoadingState(false);
    }
  }
}

export async function fetchStream(props) {
  const {
    content,
    audioSources,
    setLoadingState,
    selectedStream,
    loadingRef,
    setLoading,
    setError,
    setStream,
  } = props;
  setLoadingState(true);
  setError(null);
  if (audioSources.rezka2 && audioSources.rezka2.extract.voice?.length > 0) {
    const sources = audioSources.rezka2.extract.voice;
    const voice = sources[selectedStream];
    const foundStream = await audioSources.rezka2.getStream({ ...content, ...voice }, () => {
      setError(FAILED_TO_FETCH_MESSAGE);
    });
    setLoadingState(false);
    if (foundStream) {
      console.log('Stream', foundStream);
      const duration = await getStreamDuration(foundStream?.stream);
      if (duration > 600) {
        setStream(foundStream);
      } else {
        setError(TRY_ANOTHER_SOURCE_MESSAGE);
      }
    }
  } else {
    setLoadingState(false);
    if (!content.episode_number) {
      const trailer = selectMainTrailer(content?.videos);
      if (trailer && !loadingRef) {
        setStream(`https://www.youtube.com/watch?v=${trailer?.key}?rel=0`);
      } else if (!loadingRef) {
        setError(NOT_AVAILABLE);
      }
    } else if (!loadingRef) {
      setError(NOT_AVAILABLE);
    }
  }
  setLoading(false);
}

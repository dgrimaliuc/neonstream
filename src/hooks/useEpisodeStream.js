import { useSelector } from 'react-redux';
import { useDispatchAction } from './useDispatchAction';
import { useStream } from './useStream';
import { seriesData } from '../store/selectors/series';
import { seriesActions } from '../store';

export default function useEpisodeStream() {
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

  const dispatch = useDispatchAction(seriesActions);
  const data = useSelector(seriesData);
  //   const loaderData = useLoaderData();
  //   const params = useParams();
  //   const { pathname } = useLocation();
}

import { seriesActions } from '../store';
import { useSelector } from 'react-redux';
import { seriesData, seriesTranslations } from '../store/selectors/series';
import { useDispatchAction } from './useDispatchAction';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { fetchTranslations } from '../api/stream/actions/rezka2';
import { loadTv } from '../pages';

export default function useSeries() {
  const dispatch = useDispatchAction(seriesActions);
  const persistData = useSelector(seriesData);
  const translations = useSelector(seriesTranslations);
  const loaderData = useLoaderData();
  const params = useParams();
  const { pathname } = useLocation();

  // Set Series selector data
  useEffect(() => {
    (async function () {
      // if we on tv or episode page
      if (pathname.match(/\/tv\/\d+(.watch.)?/g).length && +params.id !== persistData.id) {
        let result = +params.id === loaderData.id ? loaderData : await loadTv({ params });
        dispatch.setData(result)();
      }
    })();
  }, [persistData, dispatch, loaderData, params, pathname]);

  //Set Translations selector data
  useEffect(() => {
    //If persistData contains valid series and translation is not actual
    if (+params.id === persistData.id && translations.id !== +params.id) {
      console.log('fetchTranslations');
      fetchTranslations({
        content: persistData,
        //setLoadingState: dispatch.setLoading,
        setAudioSources: t => dispatch.setTranslations(t)(),
      });
    } else if (translations.id !== +params.id) {
      dispatch.removeTranslations()();
    }
  }, [persistData, dispatch, params.id, translations.id]);

  return { series: persistData, translations: translations.rezka2 };
}

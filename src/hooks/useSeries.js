import { seriesActions } from '../store';
import { useSelector } from 'react-redux';
import { seriesData, seriesTranslations } from '../store/selectors/series';
import { useDispatchAction } from './useDispatchAction';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { loadTv } from '../pages';
import { isObjEmpty } from '../utils';
function fetchTranslations() {
  // TODO remove
}

export default function useSeries() {
  const dispatch = useDispatchAction(seriesActions);
  const persistData = useSelector(seriesData);
  const translations = useSelector(seriesTranslations);
  const loaderData = useLoaderData();
  const params = useParams();
  const { pathname } = useLocation();
  const season_number = +params.season || 1;

  // Set Series selector data
  useEffect(() => {
    (async function () {
      //if we on tv or episode page
      if (pathname.match(/\/tv\/\d+(.watch.)?/g).length && +params.id !== persistData.id) {
        let result = +params.id === loaderData.id ? loaderData : await loadTv({ params });
        dispatch.setData(result)();
      }
    })();
  }, [persistData, dispatch, loaderData, params, pathname]);

  //Set Translations selector data
  useEffect(() => {
    if (
      +params.id === persistData.id &&
      (translations.id !== +params.id ||
        (season_number !== translations.season_number &&
          !isObjEmpty(translations.rezka2.extract.seasons)))
    ) {
      // dispatch.removeTranslations()();
      fetchTranslations({
        // May return invalid season as season 0 can be "Specials" not the first season
        content: { ...persistData, season_number },
        //setLoadingState: dispatch.setLoading,
        setAudioSources: translations =>
          // May return invalid season as season 0 can be "Specials" not the first season
          dispatch.setTranslations({ translations, season_number })(),
      });
    } else if (
      translations.id &&
      !isObjEmpty(translations.rezka2?.extract?.seasons) &&
      (translations.id !== +params.id || season_number !== translations.season_number)
    ) {
      dispatch.removeTranslations()();
    }
  }, [
    dispatch,
    params.id,
    params.season,
    persistData,
    season_number,
    translations.id,
    translations.rezka2,
    translations.season_number,
  ]);

  return { series: persistData, translations: translations.rezka2 };
}

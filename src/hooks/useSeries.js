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
  const data = useSelector(seriesData);
  const translations = useSelector(seriesTranslations);
  const loaderData = useLoaderData();
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      // if we on tv or episode page
      if (
        pathname.match(/\/tv\/\d+(.watch.)?/g).length &&
        +params.id !== data.id
      ) {
        // if current loader data is not equal to store data
        if (
          loaderData.id === data.id ||
          (!data.id && !data.external_ids.imdb_id)
        )
          return;

        let result =
          +params.id === loaderData.id ? loaderData : await loadTv({ params });

        dispatch.setData(result)();
      }
    })();
  }, [data, dispatch, loaderData, params, pathname]);

  useEffect(() => {
    if (+params.id === data.id && !translations.id !== data.id) {
      fetchTranslations({
        content: data,
        // setLoadingState: dispatch.setLoading,
        setAudioSources: (t) => dispatch.setTranslations(t)(),
      });
    }
  }, [data, dispatch, params.id, translations.id]);

  return { series: data };
}

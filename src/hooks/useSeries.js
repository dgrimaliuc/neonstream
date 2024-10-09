import { seriesActions } from '../store';
import { useSelector } from 'react-redux';
import { seriesData } from '../store/selectors/series';
import { useDispatchAction } from './useDispatchAction';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { loadTv } from '../pages';

export default function useSeries() {
  const dispatch = useDispatchAction(seriesActions);
  const persistData = useSelector(seriesData);
  const loaderData = useLoaderData();
  const params = useParams();
  const { pathname } = useLocation();

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

  return { series: persistData };
}

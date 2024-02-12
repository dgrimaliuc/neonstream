import './browse.css';

import BrowseCard from '../../components/browse-card/browse-card';
import {
  browsePopularContent,
  popularMovies,
  popularSeries,
} from '../../services/content/contentService';
import Spinner from '../../components/spinner/spinner';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sleep } from '../../utils/utils';
import { useObserver } from '../../hooks/useObserver';
import { useDispatch, useSelector } from 'react-redux';
import { browseContentActions } from '../../store';
const { incrementPage, setInitial, addContent } = browseContentActions;

export default function Browse() {
  const location = useLocation();
  const dispatch = useDispatch();
  const observer = useObserver('.loader', () => dispatch(incrementPage()));
  const [prevLocation, setPrevLocation] = useState(location.pathname);
  const { page, content } = useSelector((state) => state.browseContent);

  useEffect(() => {
    const fetcher = async () => {
      await sleep(700);
      switch (location.pathname) {
        case '/browse/movies':
          return await popularMovies({ page });
        case '/browse/series':
          return await popularSeries({ page });
        default:
          return await browsePopularContent({ page });
      }
    };
    if (prevLocation === location.pathname) {
      fetcher()
        .then((res) => {
          dispatch(addContent(res));
        })
        .then(() => observer.observe());
    }
  }, [dispatch, location.pathname, observer, page, prevLocation]);

  useEffect(() => {
    setPrevLocation(location.pathname);

    return () => {
      dispatch(setInitial());
    };
  }, [dispatch, location.pathname]);

  return (
    <div className='browse-wrapper'>
      <div className='browse-header'>
        <h2 className='browse-title'>Browse Movies</h2>
        <div className='browse-actions'>
          <button className='sorting'>
            <i className='fa-align-left'></i>
            <span>Newest</span>
          </button>
          <button className='filter'>
            <i className='fa-filter'></i>
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className='content-wrapper'>
        {content.map((c, i) => (
          <BrowseCard
            key={i}
            title={c.title || c.name}
            poster={c.poster_path}
          />
        ))}
        {page < 500 && <Spinner display />}
      </div>
    </div>
  );
}

import './browse.css';

import BrowseCard from '../../components/browse-card/browse-card';
import {
  browsePopularContent,
  popularMovies,
  popularSeries,
} from '../../services/content/contentService';
import Spinner from '../../components/spinner/spinner';

import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { sleep } from '../../utils/utils';
import { Observer } from '../../utils/observer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment_page':
      return { ...state, page: state.page + 1 };
    case 'set_initial':
      return {
        page: 1,
        content: [],
        prevLocation: state.prevLocation,
      };
    case 'set_mounted_state':
      return { ...state, isMounting: true };
    case 'add_content':
      return { ...state, content: [...state.content, ...action.payload] };
    case 'set_prev_location':
      return { ...state, prevLocation: action.payload };
    default:
      return state;
  }
};

export default function Browse() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    page: 1,
    content: [],
    prevLocation: location.pathname,
  });

  const { page, content, prevLocation } = state;

  const observer = useMemo(() => {
    return new Observer(
      () => document.querySelector('.loader'),
      async () => dispatch({ type: 'increment_page' })
    );
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      let res = [];
      await sleep(700);
      switch (location.pathname) {
        case '/browse/movies':
          res = await popularMovies({ page });
          break;
        case '/browse/series':
          res = await popularSeries({ page });
          break;
        default:
          res = await browsePopularContent({ page });
      }
      dispatch({ type: 'add_content', payload: res });
    };
    if (prevLocation === location.pathname) {
      fetcher().then(() => observer.observe());
    }
  }, [location.pathname, observer, page, prevLocation]);

  useEffect(() => {
    dispatch({ type: 'set_prev_location', payload: location.pathname });

    return () => {
      dispatch({ type: 'set_initial' });
    };
  }, [location.pathname]);

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

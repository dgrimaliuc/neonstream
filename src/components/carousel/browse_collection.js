import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import Controls from '../controls/controls';
import { useReducer, useState } from 'react';
import {
  airingTodaySeries,
  browsePopularContent,
  nowPlayingMovies,
  popularMovies,
  popularSeries,
  recommendedMovies,
  recommendedSeries,
  topRatedMovies,
  topRatedSeries,
} from '../../services/content/contentService';
import { createReducer } from '@reduxjs/toolkit';
import { useResolvedPath } from 'react-router-dom';
import EpisodeCard from '../episode-card/episode-card';
import Carousel from './carousel';

function reducer(state, action) {
  switch (action.type) {
    case 'set_title':
      return { ...state, title: action.payload };
    case 'set_content':
      return { ...state, content: action.payload };

    case 'set_all':
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
  // ...
}

export default function BrowseCollection({ type }) {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });

  useState(() => {
    const fetcher = async () => {
      switch (type) {
        case 'popular_series':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Popular Series',
              content: await popularSeries(),
            },
          });
          break;
        case 'popular_movies':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Popular Movies',
              content: await popularMovies(),
            },
          });
          break;
        case 'recommended_movies':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Recommended Movies',
              content: await recommendedMovies(),
            },
          });
          break;
        case 'recommended_series':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Recommended Series',
              content: await recommendedSeries(),
            },
          });
          break;
        case 'top_rated_movies':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Top Rated Movies',
              content: await topRatedMovies(),
            },
          });
          break;
        case 'top_rated_series':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Top Rated Series',
              content: await topRatedSeries(),
            },
          });
          break;
        case 'now_playing_movies':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Now Playing Movies',
              content: await nowPlayingMovies(),
            },
          });
          break;
        case 'airing_today_series':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Airing Today Series',
              content: await airingTodaySeries(),
            },
          });
          break;
        default:
          console.log('default');
      }
    };
    fetcher();
  }, [type]);

  return (
    <Carousel title={state.title}>
      {state.content.map((card, i) => {
        return (
          <BrowseCard
            key={i}
            title={card.name || card.title}
            poster={card.poster_path}
          />
        );
      })}
    </Carousel>
  );
}

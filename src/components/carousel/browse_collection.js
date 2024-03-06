import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import { useEffect, useReducer, useState } from 'react';
import {
  airingTodaySeries,
  nowPlayingMovies,
  popularMovies,
  popularSeries,
  recommendedMovies,
  recommendedSeries,
  topRatedMovies,
  topRatedSeries,
  upcomingMovies,
} from '../../services/content';
import Carousel from './carousel';
import { useParams } from 'react-router-dom';

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
}

// const contentTypes = {
//   [POPULAR_SERIES_TYPE]: PopularSeriesObject
// }

const setAll = (title, content) => ({
  type: 'set_all',
  payload: { title, content },
});

export default function BrowseCollection({ type }) {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });
  const params = useParams();

  useEffect(() => {
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
              content: await recommendedMovies({
                id: params.id || 1029575,
              }),
            },
          });
          break;
        case 'recommended_series':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Recommended Series',
              content: await recommendedSeries({
                id: params.id || 42009,
              }),
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
        case 'upcoming_movies':
          dispatch({
            type: 'set_all',
            payload: {
              title: 'Upcoming Movies',
              content: await upcomingMovies(),
            },
          });
          break;
        default:
          break;
      }
    };
    fetcher();
  }, [params.id, type]);

  return (
    <Carousel title={state.title}>
      {state.content.map((card, i) => {
        return (
          <BrowseCard
            key={i}
            title={card.name || card.title}
            poster={card.poster_path}
            date={card.release_date || card.first_air_date}
            to={`/${card.media_type}/${card.id}`}
          />
        );
      })}
    </Carousel>
  );
}

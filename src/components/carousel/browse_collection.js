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
import { collectionActions } from '../../actions';

function reducer(state, action) {
  switch (action.type) {
    case 'set_all':
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

const setAll = (dispatch, title, content) => {
  dispatch({
    type: 'set_all',
    payload: {
      title: title,
      content: content,
    },
  });
};

export default function BrowseCollection({ type, baseId }) {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });
  const params = useParams();

  useEffect(() => {
    const fetcher = async () => {
      /*
  await recommendedMovies({
              id: params.id || 1029575,
            })

            await recommendedSeries({
              id: params.id || 42009,
            })
      */
      const entity = collectionActions[type];
      const content = await entity.action(baseId);
      setAll(dispatch, entity.title, content);
    };
    fetcher();
  }, [baseId, params.id, type]);

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

import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import { useCallback, useEffect, useReducer } from 'react';
import Carousel from './carousel';
import { useLocation, useParams } from 'react-router-dom';
import { collectionActions } from '../../actions';
import { useQuery } from '../../hooks';

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

const BrowseCollection = ({ type, baseId }) => {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });
  const params = useParams();
  const { pathname } = useLocation();

  const { loading, data } = useQuery(
    useCallback(async () => {
      const entity = collectionActions[type];
      const content = await entity.action({ id: baseId || params.id });
      return [entity.title, content];
    }, [baseId, params.id, type]),
  );

  useEffect(() => {
    if (data) {
      setAll(dispatch, data[0], data[1]);
    }
  }, [data]);

  return (
    <Carousel
      isLoading={loading}
      display={state.content.length > 0 && pathname !== '/'}
      title={state.title}
    >
      {state.content.map((card, i) => (
        <BrowseCard
          key={i}
          title={card.name || card.title}
          poster={card.poster_path}
          date={card.release_date || card.first_air_date}
          {...card}
        />
      ))}
    </Carousel>
  );
};

export default BrowseCollection;

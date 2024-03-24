import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import { memo, useEffect, useReducer } from 'react';
import Carousel from './carousel';
import { useLocation, useParams } from 'react-router-dom';
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

const BrowseCollection = memo(({ type, baseId }) => {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      const entity = collectionActions[type];
      const content = await entity.action({ id: baseId || params.id });
      setAll(dispatch, entity.title, content);
    })();
  }, [baseId, params.id, type]);

  if (!state.content.length && pathname !== '/') return null;

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
});

export default BrowseCollection;

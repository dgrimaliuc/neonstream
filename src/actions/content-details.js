import { MOVIE, TV } from '../data/constants';
import { getMovie, getSeries } from '../services/content';

const contentDetailsActions = {
  [MOVIE]: getMovie,
  [TV]: getSeries,
};

export default contentDetailsActions;

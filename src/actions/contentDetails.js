import { MOVIE, MULTIPLE, TV } from '../data/constants';
import { discoverMultiple, getMovie, getSeries } from '../services/content';

const contentDetailsActions = {
  [MULTIPLE]: discoverMultiple,
  [MOVIE]: getMovie,
  [TV]: getSeries,
};

export { contentDetailsActions };

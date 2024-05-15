import { SEARCH_ALL } from '../data/constants';
import { searchMulti } from '../services/content/search';

const searchActions = {
  [SEARCH_ALL]: searchMulti,
};

export { searchActions };

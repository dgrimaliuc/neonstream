import { BROWSE_ALL, BROWSE_MOVIES, BROWSE_SERIES } from '../data/constants';
import { browsePopularContent, discoverSeries, popularMovies } from '../services/content';

const browseActions = {
  [BROWSE_MOVIES]: popularMovies,
  [BROWSE_SERIES]: discoverSeries,
  [BROWSE_ALL]: browsePopularContent,
};

export { browseActions };

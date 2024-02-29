import { BROWSE_ALL, BROWSE_MOVIES, BROWSE_SERIES } from '../data/constants';
import {
  browsePopularContent,
  popularMovies,
  popularSeries,
} from '../services/content';

const browseActions = {
  [BROWSE_MOVIES]: popularMovies,
  [BROWSE_SERIES]: popularSeries,
  [BROWSE_ALL]: browsePopularContent,
};

export default browseActions;

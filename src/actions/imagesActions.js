import { MOVIE, TV } from '../data/constants';
import { getMovieImages, getSeriesImages } from '../services/content';

const imagesActions = {
  [MOVIE]: getMovieImages,
  [TV]: getSeriesImages,
};

export { imagesActions };

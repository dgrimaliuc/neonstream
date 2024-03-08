import {
  POPULAR_SERIES,
  POPULAR_MOVIES,
  RECOMMENDED_MOVIES,
  RECOMMENDED_SERIES,
  TOP_RATED_MOVIES,
  TOP_RATED_SERIES,
  NOW_PLAYING_MOVIES,
  AIRING_TODAY_SERIES,
  UPCOMING_MOVIES,
} from '../data/constants';
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
} from '../services/content';

const collectionActions = {
  [POPULAR_SERIES]: { title: 'Popular Series', action: popularSeries },
  [POPULAR_MOVIES]: { title: 'Popular Movies', action: popularMovies },
  [TOP_RATED_MOVIES]: { title: 'Top Rated Movies', action: topRatedMovies },
  [TOP_RATED_SERIES]: { title: 'Top Rated Series', action: topRatedSeries },
  [UPCOMING_MOVIES]: { title: 'Upcoming Movies', action: upcomingMovies },
  [NOW_PLAYING_MOVIES]: {
    title: 'Now Playing Movies',
    action: nowPlayingMovies,
  },
  [AIRING_TODAY_SERIES]: {
    title: 'Airing Today Series',
    action: airingTodaySeries,
  },
  [RECOMMENDED_MOVIES]: {
    title: 'Recommended Movies',
    action: recommendedMovies,
  },
  [RECOMMENDED_SERIES]: {
    title: 'Recommended Series',
    action: recommendedSeries,
  },
};

export { collectionActions };

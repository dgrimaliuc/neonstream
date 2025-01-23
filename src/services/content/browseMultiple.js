import { MOVIE, TV } from '../../data/constants';
import { handleSettledResults, validateContentType } from '../../utils';
import { getMovie, getSeries, mdb } from './index';

const discoverProps = {
  with_original_language: 'en',
  language: 'en-US',
  include_adult: false,
  timeout: 1000, // TODO Rename to delay
  page: 1,
};

const discoverSeriesProps = {
  without_keywords: `327970,3692,197715,3741,10767,271,15479,158718,
    167198,10610,194610,4325,242216,5333,13384,234957,
    233624,18453,6300,11477,258519,212673,252893,157337,6078,252097,291959,157384,171261,222176,221220,9180`,
};

export async function getConfig() {
  const config = await mdb.configuration();
  return config;
}

export async function browsePopularContent(customProps) {
  const props = { ...discoverProps, ...customProps };
  const res = await Promise.all([
    mdb.moviePopular(props),
    mdb.discoverTv({ props, ...discoverSeriesProps }),
  ]);

  return res.flatMap(r => r.results).sort(() => Math.random() - 0.5);
}

export async function popularMovies(customProps) {
  return (await mdb.moviePopular({ ...discoverProps, ...customProps })).results;
}

export async function popularSeries(customProps) {
  return (await mdb.tvPopular({ ...discoverProps, ...customProps })).results;
}

export async function recommendedMovies(customProps) {
  const props = { ...discoverProps, id: 1029575, ...customProps };
  return (await mdb.movieRecommendations(props)).results;
}

export async function similarMovies(customProps) {
  return (await mdb.movieSimilar({ ...discoverProps, ...customProps })).results;
}

export async function recommendedSeries(customProps) {
  const props = { ...discoverProps, id: 42009, ...customProps };
  return (await mdb.tvRecommendations(props)).results;
}

export async function similarSeries(customProps) {
  return (await mdb.tvSimilar({ ...discoverProps, ...customProps })).results;
}

export async function topRatedMovies(customProps) {
  return (await mdb.movieTopRated({ ...discoverProps, ...customProps })).results;
}

export async function topRatedSeries(customProps) {
  return (await mdb.tvTopRated({ ...discoverProps, ...customProps })).results;
}

export async function nowPlayingMovies(customProps) {
  return (await mdb.movieNowPlaying({ ...discoverProps, ...customProps })).results;
}

export async function airingTodaySeries(customProps) {
  return (await mdb.tvAiringToday({ ...discoverProps, ...customProps })).results;
}

export async function upcomingMovies(customProps) {
  return (await mdb.upcomingMovies({ ...discoverProps, ...customProps })).results;
}

export async function discoverSeries(customProps) {
  return (await mdb.discoverTv({ ...discoverProps, ...discoverSeriesProps, ...customProps }))
    .results;
}

export async function discoverMultiple(items, extraProps) {
  const processItem = async item => {
    try {
      validateContentType(item.mediaType);
      switch (item.mediaType) {
        case MOVIE:
          return await getMovie(item.id, extraProps);
        case TV:
          return await getSeries(item.id, extraProps);
        default:
          throw new Error('Invalid media type');
      }
    } catch (error) {
      return { error: error.message, item };
    }
  };

  const results = await Promise.allSettled(items.map(processItem));

  const { fulfilledResults } = handleSettledResults(results);

  // Return only fulfilled results for further processing
  return fulfilledResults;
}

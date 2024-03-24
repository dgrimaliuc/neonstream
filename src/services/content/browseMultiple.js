import { mdb } from './index';

const discoverProps = {
  with_original_language: 'en',
  language: 'en-US',
  include_adult: false,
  timeout: 1000,
  page: 1,
};

export async function getConfig() {
  const config = await mdb.configuration();
  return config;
}

export async function browsePopularContent(customProps) {
  const props = { ...discoverProps, ...customProps };
  const res = await Promise.all([
    mdb.moviePopular(props),
    mdb.tvPopular(props),
  ]);

  return res.flatMap((r) => r.results).sort(() => Math.random() - 0.5);
}

export async function popularMovies(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.moviePopular(props)).results;
}

export async function popularSeries(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.tvPopular(props)).results;
}

export async function recommendedMovies(customProps) {
  const props = { ...discoverProps, id: 1029575, ...customProps };
  return (await mdb.movieRecommendations(props)).results;
}

export async function similarMovies(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.movieSimilar({ ...discoverProps, ...props })).results;
}

export async function recommendedSeries(customProps) {
  const props = { ...discoverProps, id: 42009, ...customProps };
  return (await mdb.tvRecommendations(props)).results;
}

export async function similarSeries(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.tvSimilar({ ...discoverProps, ...props })).results;
}

export async function topRatedMovies(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.movieTopRated(props)).results;
}

export async function topRatedSeries(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.tvTopRated(props)).results;
}

export async function nowPlayingMovies(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.movieNowPlaying(props)).results;
}

export async function airingTodaySeries(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.tvAiringToday(props)).results;
}

export async function upcomingMovies(customProps) {
  const props = { ...discoverProps, ...customProps };
  return (await mdb.upcomingMovies(props)).results;
}

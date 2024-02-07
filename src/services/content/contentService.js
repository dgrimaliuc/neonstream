import { MovieDb } from 'tmdb-promise';
const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';
const mdb = new MovieDb(apiKey);

const discoverProps = {
  with_original_language: 'en',
  include_adult: false,
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

export default mdb;

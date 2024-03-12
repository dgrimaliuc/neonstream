import { mdb } from './index';

export async function getMovie(id, extraParams) {
  return await mdb.movieInfo({ id, ...extraParams });
}

export async function getMovieImages({ id }) {
  return await mdb.movieImages({ id });
}

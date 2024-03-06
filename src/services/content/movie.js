import { mdb } from './index';

export async function getMovie(id) {
  return await mdb.movieInfo({ id });
}

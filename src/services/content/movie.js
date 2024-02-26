import { mdb } from './index';

export async function getMovie(customProps) {
  return await mdb.movieInfo(customProps);
}

import { mdb } from './index';

export async function getSeries(id) {
  return await mdb.tvInfo({ id });
}

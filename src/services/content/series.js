import { mdb } from './index';

export async function getSeries(id) {
  return await mdb.tvInfo({ id });
}

export async function getSeriesImages(id) {
  return await mdb.tvImages({ id });
}

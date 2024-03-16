import { mdb } from './index';

export async function getSeries(id, extraParams) {
  return await mdb.tvInfo({ id, ...extraParams });
}

export async function getSeriesImages(id) {
  return await mdb.tvImages({ id });
}

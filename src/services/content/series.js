import { mdb } from './index';

export async function getSeries(customProps) {
  return await mdb.tvInfo(customProps);
}

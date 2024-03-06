import { mdb, timeout } from './index';

export function getSeasonDetails({ id, season_number }) {
  return mdb.seasonInfo({ id, season_number, ...timeout });
}

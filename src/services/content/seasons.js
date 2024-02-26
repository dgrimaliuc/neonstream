import { mdb } from './index';

export function getSeasonDetails({ id, season_number }) {
  return mdb.seasonInfo({ id, season_number });
}

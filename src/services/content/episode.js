import { mdb } from './index';

export async function getEpisode(id, season_number, episode_number) {
  return await mdb.episodeInfo({ id, season_number, episode_number });
}

import { MovieDb } from 'tmdb-promise';
const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';

test('should search for Zoolander', async () => {
  let api = new MovieDb(apiKey);

  const res = await api.searchMovie({ query: 'alien' });
  console.log(JSON.stringify(res, null, 2));
});

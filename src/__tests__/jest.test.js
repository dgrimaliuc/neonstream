const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';
const { MovieDb } = require('tmdb-promise');

test('should search for Zoolander', async () => {
  let api = new MovieDb(apiKey);

  const res = await api.searchMovie({ query: 'alien' });
  console.log(JSON.stringify(res, null, 2));
});

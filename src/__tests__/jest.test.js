import { MovieDb } from 'tmdb-promise';
import { makeCancelable } from '../utils';
import { sources } from '../api/stream';
const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';

let api = new MovieDb({ apiKey });

const SECONDS = 10000000;
jest.setTimeout(10 * SECONDS);

test('rezka parser test', async () => {
  // const tv = await api.tvInfo({ id: 60625 });
  const movie = await api.movieInfo({ id: 359410 });
  const src = await sources(movie);
  const r = await src.rezka2.search();
  const streams = await src.rezka2.getStream(r.voice[2]);
  console.log(streams);
});

test('should search for Zoolander', async () => {
  const res = await api.searchMovie({ query: 'alien' });
  console.log(JSON.stringify(res, null, 2));
});

test('make cancelable test', done => {
  const cancelablePromise = makeCancelable(new Promise(resolve => setTimeout(resolve, 200)));
  const spy = jest.fn();

  cancelablePromise.then(spy);

  setTimeout(() => {
    cancelablePromise.cancel();
  }, 100);

  setTimeout(() => {
    expect(spy).not.toHaveBeenCalled();
    done();
  }, 300);
});

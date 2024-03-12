import { MovieDb } from 'tmdb-promise';
import { makeCancelable } from '../utils';
const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';

const SECONDS = 1000;
jest.setTimeout(10 * SECONDS);

test('should search for Zoolander', async () => {
  let api = new MovieDb({ apiKey });
  const res = await api.searchMovie({ query: 'alien' });
  console.log(JSON.stringify(res, null, 2));
});

test('make cancelable test', (done) => {
  const cancelablePromise = makeCancelable(
    new Promise((resolve) => setTimeout(resolve, 200))
  );
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

import { configureStore } from '@reduxjs/toolkit';
import { browse, movie, trailer } from './slices';

const debug = false;

const store = configureStore({
  reducer: {
    browse,
    trailer,
    movie,
  },
});

export default store;

store.subscribe(() => {
  if (debug) {
    console.log(store.getState());
  }
});

export * from './slices';
export * from './selectors';
export * from './thunks';
export * from './context';

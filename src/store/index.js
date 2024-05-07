import {
  // PreloadedState,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { browse, trailer, series } from './slices';
import storage from 'redux-persist/lib/storage';
// The autoMergeLevel1 is the default stateReconciler (https://github.com/rt2zz/redux-persist?tab=readme-ov-file#state-reconciler)
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const debug = true;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
  // blacklist: ['browse', 'series'],
  blacklist: ['browse'],
  whitelists: ['series'],
};

const rootReducer = combineReducers({
  browse,
  trailer,
  series,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };

store.subscribe(() => {
  if (debug) {
    console.log(store.getState());
    window.state = store.getState();
  }
});

export * from './slices';
export * from './selectors';
export * from './thunks';
export * from './context';

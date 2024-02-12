import { configureStore } from '@reduxjs/toolkit';
import browseContent from './contentSlice';
const store = configureStore({
  reducer: {
    browseContent,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

export { browseContentActions } from './contentSlice';
export default store;

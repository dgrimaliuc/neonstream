import { configureStore } from '@reduxjs/toolkit';
import browseContent from './contentSlice';
const store = configureStore({
  reducer: {
    browseContent,
  },
});

export { browseContentActions } from './contentSlice';
export default store;

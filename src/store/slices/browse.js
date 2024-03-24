import { createSlice } from '@reduxjs/toolkit';
import { BROWSE_ALL, BROWSE_MOVIES, BROWSE_SERIES } from '../../data/constants';

const browse = createSlice({
  name: 'browse',
  initialState: {
    [BROWSE_ALL]: {
      content: [],
      page: 1,
    },
    [BROWSE_SERIES]: {
      content: [],
      page: 1,
    },
    [BROWSE_MOVIES]: {
      content: [],
      page: 1,
    },
  },
  reducers: {
    incrementPage: (state, { payload }) => {
      state[payload.mode].page += 1;
    },
    setInitial: (state, { payload }) => {
      state[payload.mode].content = [];
      state[payload.mode].page = 1;
    },
    addContent: (state, { payload }) => {
      state[payload.mode].content = [
        ...state[payload.mode].content,
        ...payload.content,
      ];
    },
  },
});

export const browseAllActions = browse.actions;
export default browse.reducer;

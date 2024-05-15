import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_ALL } from '../../data/constants';

const search = createSlice({
  name: 'search',
  initialState: {
    [SEARCH_ALL]: {
      results: [],
      page: 1,
      total_pages: Number.MAX_SAFE_INTEGER,
      total_results: Number.MAX_SAFE_INTEGER,
      hasResults: true,
    },
  },
  reducers: {
    incrementPage: (state, { payload }) => {
      state[payload.mode].page += 1;
    },
    setInitial: (state, { payload }) => {
      state[payload.mode].results = [];
      state[payload.mode].page = 1;
      state[payload.mode].total_pages = Number.MAX_SAFE_INTEGER;
      state[payload.mode].total_results = Number.MAX_SAFE_INTEGER;
    },
    addResults: (state, { payload }) => {
      const { results, mode, total_pages, total_results } = payload;
      state[mode].total_pages = total_pages;
      state[mode].total_results = total_results;
      state[mode].results = [...state[mode].results, ...results];
      state[mode].hasResults = state[mode].results.length > 0;
    },
    setHasResults(state, { payload }) {
      state[payload.mode].hasResults = payload.hasResults;
    },
  },
});

export const searchActions = search.actions;
export default search.reducer;

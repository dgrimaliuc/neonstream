import { createSlice } from '@reduxjs/toolkit';

const browseContentSlice = createSlice({
  name: 'browseContent',
  initialState: {
    content: [],
    page: 1,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    setInitial: (state) => {
      state.content = [];
      state.page = 1;
    },
    addContent: (state, action) => {
      state.content = [...state.content, ...action.payload];
    },
  },
});

export const browseContentActions = browseContentSlice.actions;
export default browseContentSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: { content: {} },
  reducers: {
    add: (state, action) => {
      const { data, media, id } = action.payload;
      state.content = {
        [`${media}-${id}`]: {
          title: data.title || data.name,
          poster: data.poster_path,
          date: data.release_date || data.first_air_date,
          media_type: media,
          id,
        },
        ...state.content,
      };
    },
    remove: (state, action) => {
      const { media, id } = action.payload;
      delete state.content[`${media}-${id}`];
    },
    clear: state => {
      state.content = {};
    },
  },
});

export const watchlistActions = watchlistSlice.actions;
export default watchlistSlice.reducer;

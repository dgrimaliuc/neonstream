import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: { content: {} },
  reducers: {
    save: (state, action) => {
      // console.log('save movie: ', action.payload);
      const { data, progress, isFullyWatched } = action.payload;
      console.log('data: ', data);
      const { id, media_type } = data;
      delete state.content[`${media_type}-${id}`];

      state.content = {
        [`${media_type}-${id}`]: {
          title: data.name || data.title,
          // poster: data.poster_path,
          // date: data.release_date || data.first_air_date,
          media_type: media_type,
          isFullyWatched,
          progress,
          id,
        },
        ...state.content,
      };
    },
    remove: (state, action) => {
      const { media_type, id } = action.payload;
      delete state.content[`${media_type}-${id}`];
    },
    setHistory: (state, action) => {
      state.content = action.payload.content;
    },
    clear: state => {
      state.content = {};
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice.reducer;

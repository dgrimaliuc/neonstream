import { createSlice } from '@reduxjs/toolkit';

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    data: {},
    translations: { id: 0 },
  },
  reducers: {
    setInitial: state => {
      state.data = {};
      state.translations = {};
    },
    setData: (state, action) => {
      console.log('action', action);
      const { id } = action.payload;
      if (!id || +state.data.id === +id) return;
      state.data = action.payload;
    },
    setTranslations: (state, action) => {
      state.translations = action.payload;
      state.translations.id = state.data.id;
    },
    removeTranslations: state => {
      state.translations = {};
    },
  },
});

export const seriesActions = seriesSlice.actions;
export default seriesSlice.reducer;

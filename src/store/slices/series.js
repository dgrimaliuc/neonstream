import { createSlice } from '@reduxjs/toolkit';

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    data: {},
    translations: { id: 0, season_number: -1 },
  },
  reducers: {
    setInitial: state => {
      state.data = {};
      state.translations = { id: 0, season_number: -1 };
    },
    setData: (state, action) => {
      const { id } = action.payload;
      if (!id || +state.data.id === +id) return;
      state.data = action.payload;
    },
    setTranslations: (state, action) => {
      state.translations = action.payload.translations;
      state.translations.season_number = action.payload.season_number;
      state.translations.id = state.data.id;
    },
    removeTranslations: state => {
      state.translations = {};
    },
  },
});

export const seriesActions = seriesSlice.actions;
export default seriesSlice.reducer;

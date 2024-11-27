import { createSlice } from '@reduxjs/toolkit';

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    data: {},
  },
  reducers: {
    setInitial: state => {
      state.data = {};
    },
    setData: (state, action) => {
      const { id } = action.payload;
      if (!id || +state.data.id === +id) return;
      state.data = action.payload;
    },
  },
});

export const seriesActions = seriesSlice.actions;
export default seriesSlice.reducer;

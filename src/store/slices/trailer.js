import { createSlice } from '@reduxjs/toolkit';

const trailerSlice = createSlice({
  name: 'trailer',
  initialState: {
    selectedTrailer: null,
  },
  reducers: {
    selectTrailer: (state, action) => {
      state.selectedTrailer = action.payload;
    },
    unselectTrailer: (state) => {
      state.selectedTrailer = null;
    },
  },
});

export const trailerActions = trailerSlice.actions;
export default trailerSlice.reducer;

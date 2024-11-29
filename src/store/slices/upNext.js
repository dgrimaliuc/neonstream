import { createSlice } from '@reduxjs/toolkit';

import { TV } from '../../data/constants';

const upNextSlice = createSlice({
  name: 'upNext',
  initialState: { content: {} },
  reducers: {
    set: (state, action) => {
      const { episode_number, season_number, id } = action.payload;
      state.content[`${TV}-${id}`] = { episode_number, season_number };
    },
    remove: (state, action) => {
      const { content } = action.payload;
      delete state.content[`${TV}-${content.id}`];
    },
  },
});

export const upNextActions = upNextSlice.actions;
export default upNextSlice.reducer;

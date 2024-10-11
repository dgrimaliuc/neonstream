import { createSlice } from '@reduxjs/toolkit';
import { OrderedMap } from '../../utils/orderedMap';
import { EPISODE } from '../../data/constants';

const historySlice = createSlice({
  name: 'history',
  initialState: { content: {} },
  reducers: {
    set: (state, action) => {
      const { data, content, progress, isFullyWatched, watched } = action.payload;
      const { id, media_type, backdrop_path, still_path, air_date, release_date } = data;

      const map = new OrderedMap(state.content, true);

      map.set(`${media_type}-${id}`, {
        title: data.name || data.title,
        backdrop_path: backdrop_path || still_path,
        date: air_date || release_date,
        tvId: media_type === EPISODE ? content.id : undefined,
        season_number: content.season_number,
        episode_number: content.episode_number,
        media_type: media_type,
        isFullyWatched,
        progress,
        watched,
        id,
      });

      state.content = map.toObject();
    },
    getOrdered: state => {
      return new OrderedMap(state.content).getOrdered();
    },
    remove: (state, action) => {
      const { media_type, id } = action.payload;
      const map = new OrderedMap(state.content);
      map.delete(`${media_type}-${id}`);
      state.content = map.toObject();
    },
    syncHistory: (state, action) => {
      state.content = new OrderedMap(action.payload.content).toObject();
    },
    clear: state => {
      state.content = new OrderedMap().toObject();
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice.reducer;

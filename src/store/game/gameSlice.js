import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  players: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameTitle(state, action) {
      state.title = action.payload.title;
    },
    setPlayers(state, action) {
      state.players = action.payload.players;
    },
  },
});

export default gameSlice.reducer;

export const { setGameTitle, setPlayers } = gameSlice.actions;

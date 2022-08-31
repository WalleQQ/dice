import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RollState {
  die1: number;
  die2: number;
  firstUserScore: number;
  secondUserScore: number;
}

const initialState: RollState = {
  die1: 0,
  die2: 0,
  firstUserScore: 0,
  secondUserScore: 0,
};

export const rollSlice = createSlice({
  name: 'roll',
  initialState,
  reducers: {
    resetGame: () => {
      return initialState;
    },
    userRoll: (state, action: PayloadAction<number>) => {
      state.die1 = Math.floor(Math.random() * 6) + 1;
      state.die2 = Math.floor(Math.random() * 6) + 1;
    },
    saveResult: (state, action: PayloadAction<number>) => {
      if (action.payload === 1) {
        state.firstUserScore += state.die1 + state.die2;
        state.die1 = 0;
        state.die2 = 0;
      } else if (action.payload === 2) {
        state.secondUserScore += state.die1 + state.die2;
        state.die1 = 0;
        state.die2 = 0;
      }
    },
    resetResult: (state) => {
      state.die1 = 0;
      state.die2 = 0;
    },
  },
});

export default rollSlice.reducer;

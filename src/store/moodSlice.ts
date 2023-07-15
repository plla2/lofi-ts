import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MoodStateProp {
  moodMode: string;
}

const initialState: MoodStateProp = {
  moodMode: "chill",
};
const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    changeMoodStatus: (state, action: PayloadAction<string>) => {
      state.moodMode = action.payload;
    },
  },
});
export const { changeMoodStatus } = moodSlice.actions;
export default moodSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "day",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<"day" | "night">) => {
      state.mode = action.payload;
    },
    changeDayNight: (state) => {
      state.mode = state.mode === "day" ? "night" : "day";
    },
  },
});

export const { setMode, changeDayNight } = modeSlice.actions;
export default modeSlice.reducer;

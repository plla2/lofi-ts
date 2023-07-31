import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RainPayload {
  rainMode: string;
  rainValue: number;
}

const rainSlice = createSlice({
  name: "rain",
  initialState: {
    rainMode: "clear",
    rainValue: 0,
  },
  reducers: {
    setRain: (state, action: PayloadAction<RainPayload>) => {
      state.rainMode = action.payload.rainMode;
      state.rainValue = action.payload.rainValue;
    },
    changeRainStatus: (
      state,
      action: PayloadAction<{ currentStatus: string; value: number }>
    ) => {
      const { currentStatus, value } = action.payload;

      if (currentStatus === "rain") {
        state.rainMode = "clear";
      } else if (currentStatus === "clear") {
        state.rainMode = "rain";
      }
      state.rainValue = value;
    },
  },
});

export const { setRain, changeRainStatus } = rainSlice.actions;
export default rainSlice.reducer;

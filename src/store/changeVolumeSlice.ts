import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface volumeType {
  volumeValue: number;
}

const initialState = {
  volumeValue: 50,
};

const changeVolumeSlice = createSlice({
  name: "changeVolume",
  initialState,
  reducers: {
    changeVolume: (state: volumeType, action: PayloadAction<number>) => {
      state.volumeValue = action.payload;
    },
  },
});

export const { actions, reducer } = changeVolumeSlice;
export const { changeVolume } = actions;
export default reducer;

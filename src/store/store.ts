import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import moodSlice from "./moodSlice";
import changeVolume from "./changeVolumeSlice";
import rainSlice from "./rainSlice";

const store = configureStore({
  reducer: {
    mode: modeSlice,
    mood: moodSlice,
    volume: changeVolume,
    rain: rainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import moodSlice from "./moodSlice";

const store = configureStore({
  reducer: { mode: modeSlice, mood: moodSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

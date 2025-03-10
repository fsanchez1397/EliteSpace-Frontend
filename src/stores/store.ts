import { configureStore } from "@reduxjs/toolkit";
import mockSlice from "../features/MockFeature/mockSlice";
import issueReducer from "./issueSlice";

const store = configureStore({
  reducer: {
    mock: mockSlice,
    issue: issueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

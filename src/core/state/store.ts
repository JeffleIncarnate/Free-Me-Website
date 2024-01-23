import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userDataSlice from "./reducers/userDataSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    userData: userDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
// interface AuthState {
//   loggedIn: boolean;
//   accessToken: string | undefined;
//   refreshToken: string | undefined;
// }

type AuthStateLoggedIn = {
  loggedIn: true;
  accessToken: string;
  refreshToken: string;
};

type AuthStateLoggedOut = {
  loggedIn: false;
  accessToken: undefined;
  refreshToken: undefined;
};

type AuthState = AuthStateLoggedOut | AuthStateLoggedIn;

// Define a type for payload of action
interface Payload {
  accessToken: string;
  refreshToken: string;
}

// Define the initial state using that type
const initialState = {
  loggedIn: false,
  accessToken: undefined,
  refreshToken: undefined,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Payload>) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;

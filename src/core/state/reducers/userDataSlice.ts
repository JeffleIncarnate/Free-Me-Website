import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type userDataExists = {
  userDataExists: true;
  firstname: string;
  lastname: string;
  type: "FREERIDER" | "CLIENT" | "CONSULTANT";
  profilePicture: string;
  banner: string;
  connections: string[];
  followers: string[];
  following: string[];
  createdAt: Date;
};

type userDataNotExists = {
  userDataExists: false;
  firstname: undefined;
  lastname: undefined;
  type: undefined;
  profilePicture: undefined;
  banner: undefined;
  connections: undefined;
  followers: undefined;
  following: undefined;
  createdAt: undefined;
};

type userDataState = userDataNotExists | userDataExists;

// Define a type for payload of action
interface Payload {
  firstname: string;
  lastname: string;
  type: "FREERIDER" | "CLIENT" | "CONSULTANT";
  profilePicture: string;
  banner: string;
  connections: string[];
  followers: string[];
  following: string[];
  createdAt: Date;
}

// Define the initial state using that type
const initialState = {
  userDataExists: false,
  firstname: undefined,
  lastname: undefined,
  type: undefined,
  profilePicture: undefined,
  banner: undefined,
  connections: undefined,
  followers: undefined,
  following: undefined,
  createdAt: undefined,
} as userDataState;

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Payload>) => {
      state.userDataExists = true;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.type = action.payload.type;
      state.profilePicture = action.payload.profilePicture;
      state.banner = action.payload.banner;
      state.connections = action.payload.connections;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.createdAt = action.payload.createdAt;
    },
    clearUserData: (state) => {
      state.userDataExists = false;
      state.firstname = undefined;
      state.lastname = undefined;
      state.type = undefined;
      state.profilePicture = undefined;
      state.banner = undefined;
      state.connections = undefined;
      state.followers = undefined;
      state.following = undefined;
      state.createdAt = undefined;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) =>
  state.userData.userDataExists;

export default userSlice.reducer;

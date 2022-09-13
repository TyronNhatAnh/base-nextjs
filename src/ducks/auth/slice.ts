import {RootState} from "@ducks/store";
import storage from "@helpers/localStorage";
import {createSlice} from "@reduxjs/toolkit";

import {initialState} from "./models";
import {getB2BProfile, getProfile, login, loginB2B} from "./thunks";

export const authSlide = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout(state) {
      storage.removeAccessToken();
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(login.fulfilled, state => {
        return {
          ...state,
          status: "idle",
          isAuthenticated: true,
        };
      })
      .addCase(login.rejected, state => {
        return {
          ...state,
          status: "failed",
        };
      })
      .addCase(loginB2B.pending, state => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(loginB2B.fulfilled, state => {
        return {
          ...state,
          status: "idle",
          isAuthenticated: true,
        };
      })
      .addCase(loginB2B.rejected, state => {
        return {
          ...state,
          status: "failed",
        };
      })
      .addCase(getProfile.pending, state => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        return {
          ...state,
          status: "idle",
          user: action.payload,
          isAuthenticated: action.payload ? true : false,
        };
      })
      .addCase(getProfile.rejected, state => {
        return {
          ...state,
          status: "failed",
        };
      })
      .addCase(getB2BProfile.pending, state => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(getB2BProfile.fulfilled, (state, action) => {
        return {
          ...state,
          status: "idle",
          user: action.payload,
          isAuthenticated: action.payload ? true : false,
        };
      })
      .addCase(getB2BProfile.rejected, state => {
        return {
          ...state,
          status: "failed",
        };
      });
  },
});

//action here
export const {logout} = authSlide.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const user = (state: RootState) => state.auth.user;

export default authSlide.reducer;

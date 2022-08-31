import {createSlice} from "@reduxjs/toolkit";

import {RootState} from "../store";
import {initialState} from "./models";
import {loginAsync} from "./thunks";

export const authSlide = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, state => {
        state.status = "failed";
      });
  },
});

//action here
export const {login} = authSlide.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const user = (state: RootState) => state.auth.user;

export default authSlide.reducer;
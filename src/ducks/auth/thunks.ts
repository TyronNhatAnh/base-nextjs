import storage from "@helpers/localStorage";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {AuthAPI} from "../../apis/auth";

export const loginAsync = createAsyncThunk("auth/login", async payload => {
  const response = await AuthAPI.LOGIN(payload);
  if (response.token) {
    storage.setAccessToken(response.token);
  }
  return response;
});

export const getProfile = createAsyncThunk("auth/getProfile", async () => {
  const response = await AuthAPI.PROFILE();
  return response;
});

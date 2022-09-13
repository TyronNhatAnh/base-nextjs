import {AuthAPI} from "@apis/auth";
import storage from "@helpers/localStorage";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (payload: any) => {
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

export const loginB2B = createAsyncThunk(
  "auth/b2b_login",
  async (payload: any) => {
    const response = await AuthAPI.B2BLOGIN(payload);
    if (response.token) {
      storage.setAccessToken(response.token);
    }
    return response;
  },
);

export const getB2BProfile = createAsyncThunk(
  "auth/getB2BProfile",
  async () => {
    const response = await AuthAPI.B2B_PROFILE();
    return response;
  },
);

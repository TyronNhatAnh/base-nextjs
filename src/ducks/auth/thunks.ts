import {createAsyncThunk} from "@reduxjs/toolkit";

import {AuthAPI} from "../../apis/auth";

export const loginAsync = createAsyncThunk("auth/login", async payload => {
  const response = await AuthAPI.LOGIN(payload);
  return response;
});

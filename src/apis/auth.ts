import {
  LoginResponse,
  ProfileResponse,
  ResetPasswordResponse,
} from "../@types/auth";
import axiosClient from "../common/helpers/axiosClient";
export const AuthAPI = {
  async LOGIN(payload: any): Promise<LoginResponse> {
    return await axiosClient.post("/auth/login", payload);
  },
  async B2BLOGIN(payload: any): Promise<LoginResponse> {
    return await axiosClient.post("/auth/b2blogin", payload);
  },
  async RESET_PASSWORD(payload: any): Promise<ResetPasswordResponse> {
    return await axiosClient.post("/reset-password", payload);
  },
  async PROFILE(): Promise<ProfileResponse> {
    return await axiosClient.get("/account/profile");
  },
  async B2B_PROFILE(): Promise<ProfileResponse> {
    return await axiosClient.get("/account/b2bprofile");
  },
};

import axiosClient from "@helpers/axiosClient";
import {
  LoginResponse,
  ProfileResponse,
  ResetPasswordResponse,
} from "@type/auth";

export const AuthAPI = {
  async LOGIN(payload: any): Promise<LoginResponse> {
    return axiosClient.post("/auth/login", payload);
  },
  async B2BLOGIN(payload: any): Promise<LoginResponse> {
    return axiosClient.post("/auth/b2blogin", payload);
  },
  async RESET_PASSWORD(payload: any): Promise<ResetPasswordResponse> {
    return axiosClient.post("/reset-password", payload);
  },
  async PROFILE(): Promise<ProfileResponse> {
    return axiosClient.get("/account/profile");
  },
  async B2B_PROFILE(): Promise<ProfileResponse> {
    return axiosClient.get("/account/b2bprofile");
  },
};

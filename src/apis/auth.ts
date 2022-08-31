import axiosClient from "../common/helpers/axiosClient";

export const AuthAPI = {
  async LOGIN(payload: any): Promise<LoginResponse> {
    return await axiosClient.post("/account/login", payload);
  },
  async RESET_PASSWORD(payload: any): Promise<ChangePasswordResponse> {
    return await axiosClient.post("/reset-password", payload);
  },
};

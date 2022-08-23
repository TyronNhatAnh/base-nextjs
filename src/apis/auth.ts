import axiosClient from "../helpers/axiosClient";

export const AuthAPI = {
  async LOGIN(payload: any): Promise<LoginResponse> {
    return await axiosClient.post("/authenticate", payload);
  },
  async RESET_PASSWORD(payload: any): Promise<ChangePasswordResponse> {
    return await axiosClient.post("/reset-password", payload);
  },
};

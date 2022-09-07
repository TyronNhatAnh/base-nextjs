import axiosClient from "../common/helpers/axiosClient";

export const B2CAPI = {
  async PROFILE(payload: any): Promise<ProfileResponse> {
    return await axiosClient.post("/profile", payload);
  },
};

import axiosClient from "@helpers/axiosClient";
import {ProfileResponse} from "@type/auth";

export const B2CAPI = {
  async PROFILE(payload: any): Promise<ProfileResponse> {
    return await axiosClient.post("/profile", payload);
  },
};

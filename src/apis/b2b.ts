import axiosClient from "@helpers/axiosClient";
import {ProfileResponse} from "@type/auth";
export const B2BAPI = {
  async PROFILE(payload: any): Promise<ProfileResponse> {
    return axiosClient.post("/profile", payload);
  },
};

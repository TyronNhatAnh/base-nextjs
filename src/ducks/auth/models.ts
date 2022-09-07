import {ProfileResponse} from "@type/auth";

export interface UserState {
  isAuthenticated: boolean;
  user: ProfileResponse;
  status: "idle" | "loading" | "failed";
}

export const initialState: UserState = {
  isAuthenticated: false,
  user: {},
  status: "loading",
};

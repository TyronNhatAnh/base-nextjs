import {ProfileResponse} from "@type/auth";

export interface UserState {
  isAuthenticated: boolean;
  user: ProfileResponse | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  status: "idle",
};

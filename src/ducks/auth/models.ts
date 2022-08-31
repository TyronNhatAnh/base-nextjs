export interface CounterState {
  isAuthenticated: boolean;
  user: {};
  status: "idle" | "loading" | "failed";
}

export const initialState: CounterState = {
  isAuthenticated: false,
  user: {},
  status: "idle",
};

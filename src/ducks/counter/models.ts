export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const initialState: CounterState = {
  value: 0,
  status: "idle",
};

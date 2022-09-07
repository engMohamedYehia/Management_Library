import { createSlice } from "@reduxjs/toolkit";

const counterslicer = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increament(state, action) {
      state.counter = state.counter + 1;
    },
  },
});

export const counteractions = counterslicer.actions;
export default counterslicer;

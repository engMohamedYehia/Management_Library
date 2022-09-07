import { createSlice } from "@reduxjs/toolkit";

const counterslicer2 = createSlice({
  name: "counter2",
  initialState: {
    counter2: 0,
  },
  reducers: {
    increasing(state, action) {
      state.counter2 += 1;
    },
  },
});


export const counteraction2 = counterslicer2.actions
export default counterslicer2

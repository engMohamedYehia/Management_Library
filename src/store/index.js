import { configureStore } from "@reduxjs/toolkit";
import counterslicer from "./counter_slicer";
import counterslicer2 from "./counter_slicer_2";

const store = configureStore({
  reducer: {
    counterreducer: counterslicer.reducer,
    counterreducer2: counterslicer2.reducer,
  },
});

export default store;

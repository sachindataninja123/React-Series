import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/counterSlice";
import useReducer from "./features/Users/userSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user : useReducer,
  },
});

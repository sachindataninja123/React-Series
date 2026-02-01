import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/Popup/popupSlice";
import employeeReducer from "./features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
  },
});

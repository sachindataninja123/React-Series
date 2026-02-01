import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EmployeePopup: false,
  deletePopup: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.EmployeePopup = action.payload ?? true;
    },
    closeEmployeePopup: (state, action) => {
      state.EmployeePopup = false;
    },
  },
});

export const { openEmployeePopup, closeEmployeePopup } = popupSlice.actions;

export default popupSlice.reducer;

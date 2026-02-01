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
    closeEmployeePopup: (state ) => {
      state.EmployeePopup = false;
    },
    openDeletePopup : (state , action) => {
        state.deletePopup = action.payload ?? true
    },
    closeDeletePopup : (state ) => {
        state.deletePopup = false;
    }

  },
});

export const { openEmployeePopup, closeEmployeePopup,openDeletePopup ,closeDeletePopup } = popupSlice.actions;

export default popupSlice.reducer;

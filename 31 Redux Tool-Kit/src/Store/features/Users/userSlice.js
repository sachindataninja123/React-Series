import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data);
      return data;
    } catch {
      return rejectWithValue("Something went Wrong!");
    }
  }
);

// user/fetchUserData/pending
// user/fetchUserData/fullfilled
// user/fetchUserData/rejected

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchUserData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    addBuilder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const {} = userSlice.actions;
export { fetchUserData };
export default userSlice.reducer;

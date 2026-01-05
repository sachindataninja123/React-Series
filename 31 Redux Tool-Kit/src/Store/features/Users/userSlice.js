import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],
};

const fetchUserData = createAsyncThunk("user/fetchUser", async () => {
  const response =await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const {} = userSlice.actions;
export{
    fetchUserData
}
export default userSlice.reducer;

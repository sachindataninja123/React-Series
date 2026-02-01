import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../API/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee / getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("project");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

export const postEmployees = createAsyncThunk(
  "employee / postEmployees",
  async (details, { rejectWithValue }) => {
    try {
      const response = await api.post("project", details);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

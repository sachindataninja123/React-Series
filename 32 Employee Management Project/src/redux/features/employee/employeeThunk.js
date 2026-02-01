import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../API/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
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
  "employee/postEmployees",
  async (details, { rejectWithValue ,dispatch}) => {
    try {
      const response = await api.post("project", details);
      dispatch(getEmployees())
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployees",
  async (id, { rejectWithValue ,dispatch}) => {
    try {
      const response = await api.delete(`project/${id}`);
      dispatch(getEmployees())
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

export const updateEmployees = createAsyncThunk(
  "employee/updateEmployees",
  async ({id, details}, { rejectWithValue ,dispatch}) => {
    console.log(id , details)
    try {
      const response = await api.put(`project/${id}`, details);
      dispatch(getEmployees())
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong!");
    }
  },
);

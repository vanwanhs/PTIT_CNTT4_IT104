import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GETALL_STUDENT } from "../../apis/apis";

export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await axios.get(API_GETALL_STUDENT);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [] as any[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      });
  },
});

export default studentSlice.reducer;

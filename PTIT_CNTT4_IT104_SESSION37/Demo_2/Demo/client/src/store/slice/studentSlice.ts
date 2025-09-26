import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../../utils/type";

const API_URL = "http://localhost:8080/students";


export const getAllUser = createAsyncThunk(
  "students/getAllUser",
  async () => {
    const res = await axios.get(API_URL);
    return res.data as Student[];
  }
);


export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (new_student: Student) => {
    const res = await axios.post(API_URL, new_student);
    return res.data as Student;
  }
);


export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (student: Student) => {
    const res = await axios.put(`${API_URL}/${student.id}`, student);
    return res.data as Student;
  }
);


export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [] as Student[],
    loading: false,
    error: null as string | null,
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
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error load students";
      })

      
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })

      
      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.students.findIndex((s) => s.id === action.payload.id);
        if (idx !== -1) {
          state.students[idx] = action.payload;
        }
      })

      
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;

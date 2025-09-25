import { configureStore } from "@reduxjs/toolkit";
import student_Slice from "./slices/studentSlice";

export const store = configureStore({
  reducer: {
    students: student_Slice,
  },
});
import { configureStore } from "@reduxjs/toolkit";
import user_slice from "../store/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: user_slice,
  }
});

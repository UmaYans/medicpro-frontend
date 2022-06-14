import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories";
import doctorsSlcie from "../features/doctorSlice";
import usersSlice from "../features/usersSlice";
import commentsSlcie from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    doctor: doctorsSlcie,
    categories: categoriesSlice,
    comments: commentsSlcie,
  },
});

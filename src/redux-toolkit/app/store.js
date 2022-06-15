import { configureStore } from "@reduxjs/toolkit";
import clinicSlice from "../features/clinic";
import categoriesSlice from "../features/categories";
import doctorsSlcie from "../features/doctorSlice";
import usersSlice from "../features/usersSlice";
import commentsSlcie from "../features/usersSlice";


export const store = configureStore({
  reducer: {
    user: usersSlice,
    clinic: clinicSlice,
    doctor: doctorsSlcie,
    categories: categoriesSlice,
    comments: commentsSlcie,
  },
});

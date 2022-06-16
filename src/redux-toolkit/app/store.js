import { configureStore } from "@reduxjs/toolkit";
import clinicSlice from "../features/clinic";
import categoriesSlice from "../features/categories";
import doctorsSlcie from "../features/doctorSlice";
import usersSlice from "../features/usersSlice";
import  entrySlice  from "../features/entrySlice";
import commentsSlcie from "../features/comments";
import servicesSlice from "../features/service";


export const store = configureStore({
  reducer: {
    user: usersSlice,
    doctor: doctorsSlcie,
    categories: categoriesSlice,
    clinic: clinicSlice,
    comments: commentsSlcie,
    entry: entrySlice,
    service: servicesSlice
  },
});

import { configureStore } from "@reduxjs/toolkit";
import clinicSlice from "../features/clinicSlice";
import categoriesSlice from "../features/categoriesSlice";
import doctorsSlcie from "../features/doctorSlice";
import usersSlice from "../features/usersSlice";
import  entrySlice  from "../features/entrySlice";
import commentsSlcie from "../features/commentsSlice";
import servicesSlice from "../features/serviceSlice";


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

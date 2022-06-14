import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories";
import doctorsSlcie from "../features/doctorSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    user: usersSlice,
<<<<<<< HEAD
    
=======
    doctor: doctorsSlcie,
    categories: categoriesSlice,
>>>>>>> eb0c3d30b685fc9c75f1ccf90b7cade5c30d1d10
  },
});

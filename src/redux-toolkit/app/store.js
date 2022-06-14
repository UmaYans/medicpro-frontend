import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import clinicSlice from "../features/clinic";


export const store = configureStore({
  reducer: {
    user: usersSlice,
    clinic: clinicSlice
  },
});

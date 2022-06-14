import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    
  },
});

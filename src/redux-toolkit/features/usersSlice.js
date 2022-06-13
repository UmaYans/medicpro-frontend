import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: false,
  signIn: false,
  error: null,
  users: [],
  token: localStorage.getItem("token"),
  loading: false,
};

export const registerUser = createAsyncThunk(
  "add/user",
  async ({ name, lastName, login, password, telephone }, thunkAPI) => {
    try {
      const res = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, login, password, telephone }),
      });
      console.log(name, lastName, login, password, telephone);
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "Ошибка при регистрации:" + error.toString(),
      });
    }
  }
);

export const auth = createAsyncThunk(
  "login/user",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue({
          error: data.error,
        });
      } else {
        localStorage.setItem("token", data.token);
        console.log(data.token);
        return thunkAPI.fulfillWithValue(data.token);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signUp = false;
        state.error = action.payload.error;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.signUp = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signUp = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(auth.fulfilled, (state, action) => {
        console.log(action);
        state.token = action.payload;
      })
      .addCase(auth.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default usersSlice.reducer;

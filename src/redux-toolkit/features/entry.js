import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

export const postEntry = createAsyncThunk(
  "add/entry",
  async ({ user, doc, time }, thunkAPI) => {
    try {
      const res = await fetch("/entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, doc, time }),
      });

      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(postEntry.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(postEntry.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      });
  },
});

export default entrySlice.reducer;


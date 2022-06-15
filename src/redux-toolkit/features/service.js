import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: [],
  error: null,
  loading: false,
};

export const getService = createAsyncThunk("get/serv", async (_, thunkAPI) => {
  try {
    const res = await fetch("/service");
    const data = await res.json();
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload.error;
      })
      .addCase(getService.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default servicesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
  error: null,
  loading: false,
};

export const getDoctors = createAsyncThunk(
  "get/doctors",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/docs");
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDoctorsById = createAsyncThunk(
  "get/doctorById",
  async (_id, thunkAPI) => {
    try {
      const res = await fetch(`/docs/${_id}`);
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doctorsSlcie = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload
      })
      .addCase(getDoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.error = action.payload.error;
      });
    builder
      .addCase(getDoctorsById.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getDoctorsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDoctorsById.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default doctorsSlcie.reducer;

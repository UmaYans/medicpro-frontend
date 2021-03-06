import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
  clinicDocs: [],
  doc: {},
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
  async (docId, thunkAPI) => {
    try {
      const res = await fetch(`/docs/${docId}`);
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDoctorsByPlace = createAsyncThunk(
  "get/doctorByPlace",
  async (clinId, thunkAPI) => {
    try {
      const res = await fetch(`/docPlace/${clinId}`);
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
        state.doctors = action.payload;
      })
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(getDoctorsById.fulfilled, (state, action) => {
        state.doc = action.payload;
        state.loading = false;
      })
      .addCase(getDoctorsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDoctorsById.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
    builder
      .addCase(getDoctorsByPlace.fulfilled, (state, action) => {
        state.clinicDocs = action.payload;
        state.loading = false;
      })
      .addCase(getDoctorsByPlace.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDoctorsByPlace.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export default doctorsSlcie.reducer;

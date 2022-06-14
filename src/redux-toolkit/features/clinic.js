import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  clinics: [],
  loading: false,
  error: null,
};

export const fetchClinics = createAsyncThunk(
  "clinic/get",
  async (_, thunkAPI) => {
    try {
      const clinics = await fetch("http://localhost:4100/polyclinics");
      return await clinics.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const clinicSlice = createSlice({
  name: "clinic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClinics.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.clinics = action.payload;
      })
      .addCase(fetchClinics.pending, (state, action) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchClinics.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      });
  },
});

export default clinicSlice.reducer;

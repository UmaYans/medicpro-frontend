import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: [],
  services: [],
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

export const getServiceByDocId = createAsyncThunk(
  "get/servByDocId",
  async (docId, thunkAPI) => {
    try {
      const clinics = await fetch(`/service/doc/${docId}`);
      const data = await clinics.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload.error;
      })
      .addCase(getService.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    builder
      .addCase(getServiceByDocId.fulfilled, (state, action) => {
        state.loading = false;
        console.log(23);
        state.service = action.payload;
      })
      .addCase(getServiceByDocId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getServiceByDocId.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default servicesSlice.reducer;

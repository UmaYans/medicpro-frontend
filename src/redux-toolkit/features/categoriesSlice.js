import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  error: null,
  loading: false,
};

export const getCategory = createAsyncThunk("get/cat", async (_, thunkAPI) => {
  try {
    const res = await fetch("/category");
    const data = await res.json();
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload.error;
      })
      .addCase(getCategory.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default categoriesSlice.reducer;

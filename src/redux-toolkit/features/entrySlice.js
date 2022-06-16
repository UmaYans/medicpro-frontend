import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  entry: {},
};

export const postEntry = createAsyncThunk(
  "add/entry",
  async ({ docId, value }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const res = await fetch(`/entry/${docId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({ time: value }),
      });

      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getEntryDocId = createAsyncThunk(
  "get/entry",
  async (docId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(`/entry/${docId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${state.user.token}` },
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
    builder
      .addCase(getEntryDocId.fulfilled, (state, action) => {
        state.entry = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getEntryDocId.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getEntryDocId.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      });
  },
});

export default entrySlice.reducer;

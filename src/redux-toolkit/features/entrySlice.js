import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  entry: {},
  entries: []
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
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getEntryByUser = createAsyncThunk(
  "get/entryUser",
  async (_, thunkAPI) => {
    try {

      const state = thunkAPI.getState();
      const res = await fetch("/entry/user", {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
      });
    }
  }
);

export const deleteEntry = createAsyncThunk(
  "delete/entry",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      await fetch(`/entry/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      return id;
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
      builder
      .addCase(getEntryByUser.fulfilled, (state, action) => {
        state.entries = action.payload;
        console.log(action.payload);

        state.loading = false;
        state.error = true
      })
      .addCase(getEntryByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getEntryByUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      });
      builder
      .addCase(deleteEntry.fulfilled, (state, action) => {
        state.loading = false;
        state.entries = state.entries.filter(
          (entri) => entri._id !== action.payload
        )
      })
      .addCase(deleteEntry.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default entrySlice.reducer;

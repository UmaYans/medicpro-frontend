import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
  error: null,
  token: localStorage.getItem("token")
};

export const getCommentsByUser = createAsyncThunk(
  "get/CommentByUser",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`/comment/user`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + initialState.token
        }
      });
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlcie = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
        console.log(action.payload);
      })
      .addCase(getCommentsByUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCommentsByUser.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default commentsSlcie.reducer;
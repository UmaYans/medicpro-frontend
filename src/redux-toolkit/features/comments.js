import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const getCommentsByUser = createAsyncThunk(
  "get/commentUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      const res = await fetch("http://localhost:4100/userCom", {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      });
      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue({ error: user.error });
      } else {
        return thunkAPI.fulfillWithValue(user);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
      });
    }
  }
);

export const deleteComment = createAsyncThunk(
  "delete/comment",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      await fetch(`http://localhost:4100/comment/${id}`, {
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

export const commentsSlcie = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getCommentsByUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCommentsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default commentsSlcie.reducer;

// .addCase(deleteComment.pending, (state, action) => {
//   state.loading = true
//   state.comments = state.comments.map(comment => {
//     if(comment._id === action.meta.arg){
//       comment.disabled = true
//     }
//     return comment
//   })
// })

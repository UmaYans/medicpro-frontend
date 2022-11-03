import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComments: [],
  comments: [],
  loading: false,
  error: null,
};

export const getCommentsByUser = createAsyncThunk(
  "get/commentUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      const res = await fetch("/userCom", {
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
      await fetch(`/comment/${id}`, {
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

export const getCommentByDoctorId = createAsyncThunk(
  "get/commentById",
  async (docId, thunkAPI) => {
    try {
      const res = await fetch(`/docCom/${docId}`);
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "add/comment",
  async ({ text, docId }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const res = await fetch(`/comment/${docId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.user.token}`,
        },
        body: JSON.stringify({ text }),
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
        state.userComments = action.payload;
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
        state.comment = state.comment.filter(
          (comment) => comment._id !== action.payload
        );
        state.userComments = state.userComments.filter(
          (comment) => comment._id !== action.payload
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
    builder
      .addCase(getCommentByDoctorId.fulfilled, (state, action) => {
        state.comment = action.payload;
      })
      .addCase(getCommentByDoctorId.rejected, (state, action) => {
        state.error = action.payload.error;
      });
    builder.addCase(addComment.fulfilled, (state, action) => {
      console.log(action);
      state.comment.push(action.payload);
    });
  },
});

export default commentsSlcie.reducer;

// .addCase(deleteComment.pending, (state, action) => {
//   state.loading = true
//    state.comment =  state.comment.map(comment => {
//     if(comment._id === action.meta.arg){
//       comment.disabled = true
//     }
//     return comment
//   })
// })

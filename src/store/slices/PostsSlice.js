import { createSlice } from "@reduxjs/toolkit";
import { getPopularThunk } from "./thunks/getPopularThunk";
import { getPostByIdThunk } from "./thunks/getPostByIdThunk";
import { getSearchThunk } from "./thunks/getSearchThunk";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    error: null,
    posts: [],
    after: "",
    post: null,
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
  },
  extraReducers: (builder) =>
    builder
      //getPopularThunk
      .addCase(getPopularThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.after = "";
      })
      .addCase(getPopularThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.afterOld && action.payload.afterOld.length > 0) {
          const newPosts = action.payload.posts.map(post => post);
          state.posts = [...state.posts, ...newPosts];
        }
        else {
          state.posts = action.payload.posts.map(post => post);
        }
        state.after = action.payload.after;
      })
      .addCase(getPopularThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getSearchThunk
      .addCase(getSearchThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.after = "";
      })
      .addCase(getSearchThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.afterOld && action.payload.afterOld.length > 0) {
          const newPosts = action.payload.posts.map(post => post);
          state.posts = [...state.posts, ...newPosts];
        }
        else {
          state.posts = action.payload.posts.map(post => post);
        }        
        state.after = action.payload.after;
      })
      .addCase(getSearchThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getPostByIdThunk
      .addCase(getPostByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.post = null;
      })
      .addCase(getPostByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getPostByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { setSearch, clearSearch } = PostsSlice.actions;
export default PostsSlice.reducer;

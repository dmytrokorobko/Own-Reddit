import { createSlice } from "@reduxjs/toolkit";
import { getPopularThunk } from "./thunks/getPopularThunk";
import { getPostByIdThunk } from "./thunks/getPostByIdThunk";
import { getLazyLoadPopularThunk } from "./thunks/getLazyLoadPopularThunk";
import { getSearchThunk } from "./thunks/getSearchThunk";

const PostsSlice = createSlice({
   name: "posts",
   initialState: {
      loading: false,
      error: null,
      posts: [],
      post: null,
      search: ''
   },
   reducers: {
      setSearch: (state, action) => {
         state.search = action.payload;
      },
      clearSearch: (state, action) => {
         state.search = '';
      }
   },
   extraReducers: builder =>
      builder
         //getPopularThunk
         .addCase(getPopularThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getPopularThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
         })
         .addCase(getPopularThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;        
         })
         //getLazyLoadPopularThunk
         .addCase(getLazyLoadPopularThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getLazyLoadPopularThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.posts.push(action.payload);
         })
         .addCase(getLazyLoadPopularThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;        
         })
         //getSearchThunk
         .addCase(getSearchThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getSearchThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
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
         })
});

export const {setSearch, clearSearch} = PostsSlice.actions;
export default PostsSlice.reducer;
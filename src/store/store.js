import { configureStore } from "@reduxjs/toolkit"
import PostsSlice from "./slices/PostsSlice"

export const store = configureStore({
   reducer: {
      posts: PostsSlice
   }
})
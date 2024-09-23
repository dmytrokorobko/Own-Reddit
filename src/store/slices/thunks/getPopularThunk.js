import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createPostsList } from "../../../helper/createPostsList";

export const getPopularThunk = createAsyncThunk(
   'posts/getPopularThunk',
   async(_, thunkAPI) => {
      try {
         const response = await axios.get('https://www.reddit.com/r/popular.json');
         const posts = createPostsList({posts: response.data.data.children});
         return posts;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
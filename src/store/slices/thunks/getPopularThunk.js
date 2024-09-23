import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createPostsList } from "../../../helper/createPostsList";

export const getPopularThunk = createAsyncThunk(
   'posts/getPopularThunk',
   async({after}, thunkAPI) => {
      try {
         let url = 'https://www.reddit.com/r/popular.json';
         if (after && after.length > 0) url = url + `?after=${after}`;
         const response = await axios.get(url);
         const posts = createPostsList({posts: response.data.data.children});
         const afterNew = response.data.data.after;         
         return {
            posts: posts,
            afterOld: after,
            after: afterNew

         };
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
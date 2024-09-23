import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createPostsList } from "../../../helper/createPostsList";

export const getSearchThunk = createAsyncThunk(
   'posts/getSearchThunk',
   async({search, after}, thunkAPI) => {
      try {
         search = search.trim().split(/\s+/).join("%");
         let url = 'https://www.reddit.com/search.json?q='+search;
         if (after && after.length > 0) url = url + `&after=${after}`;
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
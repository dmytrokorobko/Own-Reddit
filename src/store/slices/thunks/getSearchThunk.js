import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createPostsList } from "../../../helper/createPostsList";

export const getSearchThunk = createAsyncThunk(
   'posts/getSearchThunk',
   async({search}, thunkAPI) => {
      try {
         console.log("Search string from Thunk: " + search);
         search = search.trim().split(/\s+/).join("%");
         console.log("Search after mod: " + search);
         const response = await axios.get('https://www.reddit.com/search.json?q='+search);
         const posts = createPostsList({posts: response.data.data.children});
         return posts;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchThunk = createAsyncThunk(
   'posts/getSearchThunk',
   async({search}, thunkAPI) => {
      try {
         console.log("Search string from Thunk: " + search);
         search = search.trim().split(/\s+/).join("%");
         console.log("Search after mod: " + search);
         const response = await axios.get('https://www.reddit.com/search.json?q='+search);
         const posts = response.data.data.children.map(p => {
            return {
               id: p.data.id,
               comments: p.data.num_comments,
               title: p.data.title,
               url: p.data.url
            };
         });
         console.log(posts);
         return posts;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
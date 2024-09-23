import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularThunk = createAsyncThunk(
   'posts/getPopularThunk',
   async(_, thunkAPI) => {
      try {
         const response = await axios.get('https://www.reddit.com/r/popular.json');
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
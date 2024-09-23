import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostByIdThunk = createAsyncThunk(
   'posts/getPostByIdThunk',
   async({id}, thunkAPI) => {
      try {
         const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);
         console.log(response.data);
         return response.data;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
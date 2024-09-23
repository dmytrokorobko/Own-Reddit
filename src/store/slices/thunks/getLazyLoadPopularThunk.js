import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLazyLoadPopularThunk = createAsyncThunk(
   'posts/getLazyLoadPopularThunk',
   async(_, thunkAPI) => {
      try {
         const response = await axios.get('');
         console.log(response.data);
         return response.data;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)
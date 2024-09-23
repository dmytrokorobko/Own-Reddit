import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostByIdThunk = createAsyncThunk(
   'posts/getPostByIdThunk',
   async({id}, thunkAPI) => {
      try {
         const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);
         console.log(response.data);
         if (response.data.length !== 2) return null;
         const post = {
            head: {
               id: response.data[0].data.children[0].data.id,
               title: response.data[0].data.children[0].data.title,
               thumbnail: response.data[0].data.children[0].data.thumbnail.replace(/&amp;/g, '&')
            },
            comments: []
         }
         const comments = response.data[1].data.children.map(c => {
            const comment = {
               id: c.data.id,
               body: c.data.body
            }
            return comment;            
         })
         post.comments = comments;
         console.log(post);
         return post;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)

function getOneMoreComment(comments) {

}

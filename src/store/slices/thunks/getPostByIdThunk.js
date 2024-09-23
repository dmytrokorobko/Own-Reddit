import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostByIdThunk = createAsyncThunk(
   'posts/getPostByIdThunk',
   async({id}, thunkAPI) => {
      try {
         const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);
         if (response.data.length !== 2) return null;
         const post = {
            head: {
               id: response.data[0].data.children[0].data.id,
               title: response.data[0].data.children[0].data.title,
               thumbnail: response.data[0].data.children[0].data.thumbnail.replace(/&amp;/g, '&')
            },
            comments: []
         }
         const comments = getComments(response.data[1].data.children);
         post.comments = comments;
         return post;
      } catch(err) {
         thunkAPI.rejectWithValue(err);
      }
   }
)

function getComments(comments) {
   if (comments.length === 0) return [];
   
   return comments.map(c => {
      const comment = {
         id: c.data.id,
         body: c.data.body, 
         replies: []
      }

      if (c.data.replies && c.data.replies.data && c.data.replies.data.children.length > 0) {
         comment.replies = getComments(c.data.replies.data.children);
      }
      
      return comment;            
   })
}

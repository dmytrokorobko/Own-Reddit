import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getPostByIdThunk } from "../store/slices/thunks/getPostByIdThunk";

export const Page = () => {
   const {page} = useParams();
   const post = useSelector(state => state.posts.post);
   const dispatch = useDispatch();

   useEffect(() => {
      console.log(page);
      dispatch(getPostByIdThunk({id: page}));
   }, [page]);

   if (post) 
      return (
         <>
            <h1>{post.title}</h1>
         </>
   )
}
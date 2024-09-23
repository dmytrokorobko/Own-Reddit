import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getPostByIdThunk } from "../store/slices/thunks/getPostByIdThunk";

export const Page = () => {
   const {page} = useParams();
   const post = useSelector(state => state.posts.post);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPostByIdThunk({id: page}));
   }, [page]);

   if (post) 
      return (
      <>
         {post.head && (
            <>               
               <div className="post-head">
                  <h1>{post.head.title}</h1>
                  <img src={post.head.thumbnail} alt={post.head.title} />
               </div>
               <div className="comments">
                  {post.comments ? (
                     post.comments.map(c => (
                        <div key={c.id} className="comment">
                           <p>{c.body}</p>
                        </div>                     
                     ))
                  ) : (
                     <p>No comments in this thread</p>
                  )}
               </div>
            </>
         )}            
      </>
      )
}
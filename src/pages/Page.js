import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getPostByIdThunk } from "../store/slices/thunks/getPostByIdThunk";
import { Comments } from "../components/Comments";

export const Page = () => {
   const {page} = useParams();
   const post = useSelector(state => state.posts.post);
   const dispatch = useDispatch();
   const [isLarge, setIsLarge] = useState(false);

   useEffect(() => {
      dispatch(getPostByIdThunk({id: page}));
   }, [page]);

   const handleImgClick = () => {
      setIsLarge(prev => !prev);
   }

   if (post) 
      return (
      <>
         {post.head && (
            <div className="post-page">               
               <div className="post-head">
                  <h1>{post.head.title}</h1>
                  <img src={post.head.thumbnail} alt={post.head.title} onClick={handleImgClick} style={{width: isLarge ? '400px' : '140px', height: isLarge ? '400px' : '140px'}} />
               </div>
               <div className="comments">
                  {post.comments ? (
                     <>
                        <h3>Comments:</h3>
                        <Comments comments={post.comments} />
                     </>
                  ) : (
                     <p>No comments in this thread</p>
                  )}
               </div>
            </div>
         )}            
      </>
      )
}
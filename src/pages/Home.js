import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPopularThunk } from "../store/slices/thunks/getPopularThunk";
import { getSearchThunk } from "../store/slices/thunks/getSearchThunk";
import { PostItem } from "../components/PostItem";

export const Home = () => {
   const dispatch = useDispatch();
   const search = useSelector(state => state.posts.search);
   const posts = useSelector(state => state.posts.posts);
   const error = useSelector(state => state.posts.error);
   
   useEffect(() => {
      dispatch(getPopularThunk());
   },[]);

   useEffect(() => {
      if (search.length > 0) {
         dispatch(getSearchThunk({search}));
      }
   }, [search]);
   return (
      <>
         {search ? (
            <h1>Search: {search}</h1>
         ) : (
            <h1>Popular posts</h1>
         )}

         <div className="post-items">
            {posts ? (
               posts.map(post => (
                  <PostItem key={post.id} post={post} />
               ))
            ) : (
               <p>No posts to load...</p>
            )}
         </div> 

         <div className="error">
            <p>{error}</p>
         </div>
      </>
   )
}
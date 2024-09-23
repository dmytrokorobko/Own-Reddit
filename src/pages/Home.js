import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../components/PostItem";
import { getPopularThunk } from "../store/slices/thunks/getPopularThunk";
import { getSearchThunk } from "../store/slices/thunks/getSearchThunk";

export const Home = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.posts.search);
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const [isLoading, setIsLoading] = useState(false);
  const after = useSelector((state) => state.posts.after);

  useEffect(() => {
    dispatch(getPopularThunk({after: null}));
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      dispatch(getSearchThunk({ search }));
    }
  }, [search]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (search.length > 0)
        dispatch(getSearchThunk({search, after}));
      else 
        dispatch(getPopularThunk({after}));
    }
  }, [after]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {search ? <h1>Search: {search}</h1> : <h1>Popular posts</h1>}

      <div className="post-items">
        {posts ? (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <p>No posts to load...</p>
        )}
      </div>

      <div className="error">
        <p>{error}</p>
      </div>

      {isLoading && <p>Loading more posts...</p>}
    </>
  );
};

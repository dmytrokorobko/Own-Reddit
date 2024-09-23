import { useState } from "react"
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/PostsSlice";
import { useNavigate } from "react-router-dom";

export const Search = () => {
   const [searchText, setSearchText] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSearch = (e) => {
      e.preventDefault();
      dispatch(setSearch(searchText));
      setSearchText('');
      navigate('/');
   }
   return (
      <form onSubmit={handleSearch}>
         <input type="text" name="search" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
         <input type="submit" value="Search" />
      </form>
   )
}
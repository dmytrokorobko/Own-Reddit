import { useState } from "react"
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/PostsSlice";

export const Search = () => {
   const [searchText, setSearchText] = useState('');
   const dispatch = useDispatch();

   const handleSearch = (e) => {
      e.preventDefault();
      dispatch(setSearch(searchText));
      console.log("setSearch: " + searchText);
   }
   return (
      <form onSubmit={handleSearch}>
         <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
         <input type="submit" value="Search" />
      </form>
   )
}
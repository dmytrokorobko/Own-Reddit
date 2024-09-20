import { useState } from "react"

export const Search = () => {
   const [searchText, setSearchText] = useState('');
   return (
      <form>
         <input type="text" placeholder="Search" value={searchText} onChange={setSearchText} />
         <input type="submit" value="Search" />
      </form>
   )
}
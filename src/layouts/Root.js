import { Outlet } from "react-router-dom"
import { Search } from "../components/Search"

export const Root = () => {
   return (
      <div className="app-content">
         <header>
            <div>
               <h1 className="logo">Own Reddit</h1>
            </div>
            <Search />
         </header>
         <section>
            <Outlet />
         </section>
         <footer>
            <p>&copy; 2024. Dmytro Korobko. Codecademy Portfolio Project.</p>
         </footer>
      </div>
   )
}
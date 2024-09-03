import '../sass/Layout.scss'
import { useState } from "react";
import Heading from "../components/Heading";
import SearchAnime from "../components/SearchAnime";
import { AnimeContext } from "../context/AnimeContext";
import { NavLink, Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const [query, setQuery] = useState('Naruto')
  const location = useLocation();
  const detailPage = location.pathname.startsWith('/animeDetails');
  return (
    <AnimeContext.Provider value={{query, setQuery}}>
      <header>
        {detailPage && (
          <NavLink to={'/'} className='backLink'>Back</NavLink>
        )}
      {!detailPage &&  <SearchAnime  />}
      </header>
         {!detailPage &&  <Heading />}
      <main>
        <Outlet />
      </main>
      <footer style={{display: 'flex', justifyContent: 'center'}}>
   All rights reserved
      </footer>
    </AnimeContext.Provider>
  )
}

export default Layout

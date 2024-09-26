import '../sass/Layout.scss'
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import SearchAnime from "../components/SearchAnime";
import { AnimeContext } from "../context/AnimeContext";
import { NavLink, Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const yourSavedAnime = JSON.parse(localStorage.getItem('savedAnime') || '[]')
  const [savedAnime, setSavedAnime] = useState(yourSavedAnime)
  const [query, setQuery] = useState('Naruto')
  const location = useLocation();
  const detailPage = location.pathname.startsWith('/animeDetails');
  const savedPage = location.pathname.startsWith('/savedAnimes')

  useEffect(() => {
    localStorage.setItem('savedAnime', JSON.stringify(savedAnime))
  }, [savedAnime])

  return (
    <AnimeContext.Provider value={{query, setQuery, savedAnime, setSavedAnime }}>
      <header>
        {detailPage || savedPage && (
          <NavLink to={'/'} className='backLink'>Back</NavLink>
        )}
      {!detailPage && !savedPage && <SearchAnime  />}
      </header>
         {!detailPage && !savedPage && <Heading />}
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

import '../sass/Layout.scss'
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import SearchAnime from "../components/SearchAnime";
import { AnimeContext } from "../context/AnimeContext";
import { NavLink, Outlet, useNavigate} from "react-router-dom"
import emptyBookmark from '../assets/bookmark-regular.svg'
import fullBookmark from '../assets/bookmark-solid.svg'

const Layout = () => {
  const yourSavedAnime = JSON.parse(localStorage.getItem('savedAnime') || '[]')
  const [savedAnime, setSavedAnime] = useState(yourSavedAnime)
  const [query, setQuery] = useState('Naruto')
  const detailPage = location.pathname.startsWith('/animeDetails');
  const savedPage = location.pathname.startsWith('/savedAnimes')
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('savedAnime', JSON.stringify(savedAnime))
  }, [savedAnime])

 const bookmarkIcon = savedAnime.length > 0 ? fullBookmark : emptyBookmark;
 console.log(bookmarkIcon)

 const handleSavedAnimes = () => {
    navigate('/savedAnimes')
 }

  return (
    <AnimeContext.Provider value={{query, setQuery, savedAnime, setSavedAnime }}>

      <header>
        {(detailPage || savedPage) && (
          <NavLink to={'/'} className='backLink'>Back</NavLink>
        )}
      {!detailPage && !savedPage &&  (
        <>
        <SearchAnime  />
        <img src={bookmarkIcon} alt="bookmark" className='bookmark' onClick={handleSavedAnimes} />
        </>
      )}
      </header>

         {!detailPage && !savedPage && <Heading />}

      <main>
        <Outlet />
      </main>
      
      <footer>
          All rights reserved
      </footer>
    </AnimeContext.Provider>
  )
}

export default Layout

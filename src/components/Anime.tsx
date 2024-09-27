import '../sass/anime.scss';
import { IAnime } from "../model/IAnime"
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import emptyBookmark from '../assets/bookmark-regular.svg'
import fullBookmark from '../assets/bookmark-solid.svg'

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  const {savedAnime, setSavedAnime} = useContext(AnimeContext)
  
  const isAnimeSaved = savedAnime.some((saved) => saved.mal_id === anime.mal_id)
  const bookmarkIcon = isAnimeSaved ? fullBookmark : emptyBookmark

  const saveAnime = () => {
    if(isAnimeSaved) {
      const updatedSavedAnime = savedAnime.filter((saved) => saved.mal_id !== anime.mal_id)
      setSavedAnime(updatedSavedAnime)
    } else {
      const updatedSavedAnime = [...savedAnime, anime];
      setSavedAnime(updatedSavedAnime)
      console.log('Anime Saved')
    }
  }
  const truncatedTitle = anime.title.length > 10 ? anime.title.substring(0, 30) + "..." : anime.title;

  return (
    <div className="animeContainer">
      <img src={bookmarkIcon} alt="bookMark" className='bookmark' onClick={saveAnime}/>
       
      <NavLink to={`/animeDetails/${anime.mal_id}`} className='navLink'>
      <img src={anime.images.jpg.image_url} alt={anime.title} className="animeImg"/>
      <h3 className="animeTitleHeading">{truncatedTitle}</h3>
        <p>Click for more details</p>
        </NavLink> 
    </div>
  )
}

export default Anime

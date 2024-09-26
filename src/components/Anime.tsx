import '../sass/anime.scss';
import { IAnime } from "../model/IAnime"
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  const {savedAnime, setSavedAnime} = useContext(AnimeContext)

  const saveAnime = () => {
    const updateSavedAnime = [...savedAnime, anime];
    setSavedAnime(updateSavedAnime)
    console.log('Anime Saved')
  }

  return (
    <div className="animeContainer">
        <button className='saveBtn' onClick={saveAnime}>Spara</button>
      <NavLink to={`/animeDetails/${anime.mal_id}`} className='navLink'>
      <img src={anime.images.jpg.image_url} alt={anime.title} className="animeImg"/>
        Click for more details
      <h3 className="animeTitleHeading">{anime.title}</h3>
        </NavLink> 
    </div>
  )
}

export default Anime

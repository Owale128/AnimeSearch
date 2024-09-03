import '../sass/anime.scss';
import { IAnime } from "../model/IAnime"
import { NavLink } from "react-router-dom";

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  return (
    <div className="animeContainer">
      <NavLink to={`/animeDetails/${anime.mal_id}`} className='navLink'>
      <img src={anime.images.jpg.image_url} alt={anime.title} className="animeImg"/>
        Click for more details
      <h3 className="animeTitleHeading">{anime.title}</h3>
        </NavLink> 
    </div>
  )
}

export default Anime

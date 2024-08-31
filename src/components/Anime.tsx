import { NavLink } from "react-router-dom";
import { IAnime } from "../model/IAnime"
import '../sass/anime.scss';

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  return (
    <div className="animeContainer">
      <NavLink to={`/animeDetails/${anime.mal_id}`} className='navLink'>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
        Click for more details
      <h3>{anime.title}</h3>
        </NavLink> 
    </div>
  )
}

export default Anime

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
        Click for more detail
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h2>{anime.title}</h2>
        </NavLink> 
    </div>
  )
}

export default Anime

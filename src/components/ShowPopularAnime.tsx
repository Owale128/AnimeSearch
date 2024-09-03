import '../sass/popularAnime.scss'
import { IAnime } from "../model/IAnime"
import { NavLink } from "react-router-dom";

interface IShowPopularAnime {
    popularAnime: IAnime[];
}

const ShowPopularAnime = ({popularAnime}: IShowPopularAnime) => {
        const maxPopularAnime = 5;
  return (
    <div>
      {popularAnime.slice(0, maxPopularAnime).map((pop) => (
         <NavLink to={`/animeDetails/${pop.mal_id}`} className='navLink'>
        <div key={pop.mal_id} className="popularAnime">
            <img src={pop.images.jpg.image_url} alt={pop.title} className="popularAnimeImg" />
            <h3 className="popularAnimeHeading">{pop.title}</h3>
        </div>
         </NavLink>
      ))}
    </div>
  )
}

export default ShowPopularAnime

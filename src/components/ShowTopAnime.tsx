import { NavLink } from "react-router-dom";
import { IAnime } from "../model/IAnime"
import '../sass/topAnime.scss'

interface IShowTopAnime {
    topAnime: IAnime[]
}

const ShowTopAnime = ({topAnime}: IShowTopAnime) => {
    const maxAnimeToShow = 5;
  return (
    <div>
      {topAnime.slice(0, maxAnimeToShow).map((top) => (
           <NavLink to={`/animeDetails/${top.mal_id}`} className='navLink'>
        <div key={top.mal_id} className="topAnime">
            <img src={top.images.jpg.image_url} alt={top.title} />
            <h3>{top.title}</h3>
        </div>
           </NavLink>
      ))}
    </div>
  )
}

export default ShowTopAnime

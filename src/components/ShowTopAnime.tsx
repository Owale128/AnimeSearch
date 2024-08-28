import { IAnime } from "../model/IAnime"
import '../sass/ShowTopAnime.scss'

interface IShowTopAnime {
    topAnime: IAnime[]
}

const ShowTopAnime = ({topAnime}: IShowTopAnime) => {
    const maxAnimeToShow = 5;
  return (
    <div>
      {topAnime.slice(0, maxAnimeToShow).map((top) => (
        <div key={top.mal_id} className="topAnime">
            <img src={top.images.jpg.image_url} alt={top.title} />
            <h3>{top.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ShowTopAnime

import { IAnime } from "../model/IAnime"
import '../sass/popularAnime.scss'

interface IShowPopularAnime {
    popularAnime: IAnime[];
}

const ShowPopularAnime = ({popularAnime}: IShowPopularAnime) => {
        const maxPopularAnime = 5;
  return (
    <div>
      {popularAnime.slice(0, maxPopularAnime).map((pop) => (
        <div key={pop.mal_id} className="popularAnime">
            <img src={pop.images.jpg.image_url} alt={pop.title} />
            <h3>{pop.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ShowPopularAnime

import { IAnime } from "../model/IAnime"

interface IShowPopularAnime {
    popularAnime: IAnime[];
}

const ShowPopularAnime = ({popularAnime}: IShowPopularAnime) => {
        const maxPopularAnime = 5;
  return (
    <div>
      {popularAnime.slice(0, maxPopularAnime).map((pop) => (
        <div key={pop.mal_id} className="popularAnime">
            <h3>{pop.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ShowPopularAnime

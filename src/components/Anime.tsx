import { IAnime } from "../model/IAnime"

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  return (
    <div>
      <h2>{anime.title}</h2>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h4>Genre: {anime.type}</h4>
      <p>{anime.synopsis}</p>
      <h5>More details:  <a href={anime.url} target="_blank" rel="noopener noreferrer">View on MyAnimeList</a></h5>
    </div>
  )
}

export default Anime

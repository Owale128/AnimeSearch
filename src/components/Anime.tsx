import { IAnime } from "../model/IAnime"

interface IAnimeProps {
    anime: IAnime;
}

const Anime = ({anime}: IAnimeProps) => {

  return (
    <div>
      <h2>{anime.title}</h2>
    </div>
  )
}

export default Anime

import '../sass/anime.scss'
import Anime from "./Anime"
import { IAnime } from "../model/IAnime"

interface IAnimes {
    getAnime: IAnime[]
}

const Animes = ({getAnime}: IAnimes) => {
  return (
    <div className="animesContainer">
       {getAnime.map((a) => (
        <Anime key={a.mal_id} anime={a}/>
       ))} 
    </div>
  )
}

export default Animes

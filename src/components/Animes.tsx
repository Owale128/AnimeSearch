import { IAnime } from "../model/IAnime"
import Anime from "./Anime"
import '../sass/anime.scss'


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

import { IAnime } from "../model/IAnime"
import Anime from "./Anime"


interface IAnimes {
    getAnime: IAnime[]
}

const Animes = ({getAnime}: IAnimes) => {


  return (
    <div>
       {getAnime.map((a) => (
        <Anime key={a.mal_id} anime={a}/>
       ))}
      
    </div>
  )
}

export default Animes

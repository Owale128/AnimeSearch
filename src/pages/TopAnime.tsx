import ShowTopAnime from "../components/ShowTopAnime"
import '../sass/topAnime.scss'
import { getTopAnime } from "../services/animeService"
import { useFetchAnime } from "../hooks/useFetchAnime"
import PopularAnime from "./PopularAnime"


const TopAnime = () => {
  const {data} = useFetchAnime(getTopAnime)

  return (
    <div className="topAnimeContainer">
        <h3>Top Anime</h3>
      <ShowTopAnime topAnime={data || []}/>
      <PopularAnime />
    </div>
  )
}

export default TopAnime

import ShowPopularAnime from "../components/ShowPopularAnime"
import '../sass/popularAnime.scss'
import { getPopularAnime } from "../services/animeService"
import { useFetchAnime } from "../hooks/useFetchAnime"


const PopularAnime = () => {
  const {data} = useFetchAnime(getPopularAnime)

  return (
    <div className="popularAnimeContainer">
            <h3>Popular Anime</h3>
      <ShowPopularAnime popularAnime={data || []} />
    </div>
  )
}

export default PopularAnime

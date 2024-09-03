import '../sass/popularAnime.scss'
import { useFetchAnime } from "../hooks/useFetchAnime"
import { getPopularAnime } from "../services/animeService"
import ShowPopularAnime from "../components/ShowPopularAnime"


const PopularAnime = () => {
  const {data} = useFetchAnime(getPopularAnime, [])

  return (
    <div className="popularAnimeContainer">
            <h3>Popular Anime</h3>
      <ShowPopularAnime popularAnime={data || []} />
    </div>
  )
}

export default PopularAnime

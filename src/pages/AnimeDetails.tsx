import '../sass/animeDetail.scss'
import Loading from "../components/Loading"
import { useParams } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail"
import { getAnimeDetails } from "../services/animeService"
import { useFetchAnime } from "../hooks/useFetchAnime"


const AnimeDetails = () => {
  const { id } = useParams<{id: string}>()
  const {data, isLoading} = useFetchAnime(() => getAnimeDetails(id!), [id])

  if(isLoading) return <Loading />

  return (
    <div>
        <AnimeDetail animeDetail={data!} />
    </div>
  )
}

export default AnimeDetails

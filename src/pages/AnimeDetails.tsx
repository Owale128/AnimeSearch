import { useParams } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail"
import { getAnimeDetails } from "../services/animeService"
import { useFetchAnime } from "../hooks/useFetchAnime"


const AnimeDetails = () => {
  const { id } = useParams<{id: string}>()
  const {data, isLoading} = useFetchAnime(() => getAnimeDetails(id!))

  if(isLoading) return <h4 style={{height: '100vh', textAlign: 'center'}}>...Loading...</h4>

  return (
    <div>
        <AnimeDetail animeDetail={data!} />
    </div>
  )
}

export default AnimeDetails

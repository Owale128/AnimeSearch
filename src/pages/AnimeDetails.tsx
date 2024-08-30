import { IAnime } from "../model/IAnime"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail"
import { getAnimeDetails } from "../services/animeService"


const AnimeDetails = () => {
  const [animeDetail, setAnimeDetail] = useState<IAnime | null>(null)
  const { id } = useParams<{id: string}>()

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try{
        const data = await getAnimeDetails(id!)
        setAnimeDetail(data)
      }catch (error) {
        console.error('Could not fetch', error)
      }
    }
    fetchAnimeDetails()
  }, [id])

  if(!animeDetail) return <p>..Loading...</p>

  return (
    <div>
        <AnimeDetail animeDetail={animeDetail} />
    </div>
  )
}

export default AnimeDetails

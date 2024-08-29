import axios from "axios"
import { IAnime } from "../model/IAnime"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail"


const AnimeDetails = () => {
  const [animeDetail, setAnimeDetail] = useState<IAnime | null>(null)
  const { id } = useParams<{id: string}>()

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        setAnimeDetail(response.data.data)
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

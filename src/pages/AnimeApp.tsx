import { useEffect, useState } from "react"
import axios from "axios";
import Animes from "../components/Animes";
import SearchAnime from "../components/SearchAnime";
import { IAnime } from "../model/IAnime";

const AnimeApp = () => {
    const [getAnime, setGetAnime] = useState<IAnime[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
      const fetchAnime = async () => {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
          console.log(response.data.data)
          setGetAnime(response.data.data)
        } catch (error) {
          console.error('Could not fetch:', error)
        } finally{
          setIsLoading(false)
        }
      }
      fetchAnime()
    }, [query])

    if(isLoading) {
      return <h4>...Loading...</h4>
    }

  return (
    <>
      <h1>Anime List</h1>
      <SearchAnime setQuery={ setQuery}/>
      <Animes getAnime={getAnime}/>
    </>

 
  )
}

export default AnimeApp

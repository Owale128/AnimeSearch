import { useEffect, useState } from "react"
import axios from "axios";
import { AnimeContext, IAnimeContext } from "../context/AnimeContext"

const AnimeApp = () => {
    const [getAnime, setGetAnime] = useState<IAnimeContext>({
      myAnimes: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchAnime = async () => {
        try {
          const response = await axios.get('https://api.jikan.moe/v4/anime?q=Naruto')
          console.log(response.data.data)
          setGetAnime(response.data.data)
        } catch (error) {
          console.error('Could not fetch:', error)
        } finally{
          setIsLoading(false)
        }
      }
      fetchAnime()
    }, [])

    if(isLoading) {
      return <h4>...Loading...</h4>
    }

  return (
    <AnimeContext.Provider value={getAnime}>
      <h1>Anime List</h1>
    </AnimeContext.Provider>
  )
}

export default AnimeApp

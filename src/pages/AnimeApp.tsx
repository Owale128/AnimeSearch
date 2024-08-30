import { useContext, useEffect, useState } from "react"
import Animes from "../components/Animes";
import { IAnime } from "../model/IAnime";
import TopAnime from "./TopAnime";
import '../sass/animeApp.scss'
import { AnimeContext } from "../context/AnimeContext";
import { searchForAnime } from "../services/animeService";

const AnimeApp = () => {
    const [getAnime, setGetAnime] = useState<IAnime[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {query} = useContext(AnimeContext)

    useEffect(() => {
      const fetchAnime = async () => {
        try {
          const data = await searchForAnime(query)
          console.log(data)
          setGetAnime(data)
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
        <h1>Anime World</h1>
      <div className="container">
      <TopAnime />
      <Animes getAnime={getAnime}/>
      </div>
    </>

 
  )
}

export default AnimeApp

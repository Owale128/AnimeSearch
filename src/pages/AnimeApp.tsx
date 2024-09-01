import { useContext} from "react"
import Animes from "../components/Animes";
import TopAnime from "./TopAnime";
import '../sass/animeApp.scss'
import { AnimeContext } from "../context/AnimeContext";
import { useFetchAnime } from "../hooks/useFetchAnime";
import { searchForAnime } from "../services/animeService";

const AnimeApp = () => {
    const {query} = useContext(AnimeContext)
    const {data, isLoading} = useFetchAnime(() => searchForAnime(query), [query])

    if(isLoading) return <h4 className="isLoading">...Loading...</h4>
    
  return (
    <>
        <h1 className="animeAppHeading">Anime World</h1>
      <div className="container">
      <TopAnime />
      <Animes getAnime={data || []}/>
      </div>
    </>

 
  )
}

export default AnimeApp

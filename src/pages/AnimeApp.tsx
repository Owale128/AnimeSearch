import { useContext} from "react"
import Animes from "../components/Animes";
import TopAnime from "./TopAnime";
import '../sass/animeApp.scss'
import { AnimeContext } from "../context/AnimeContext";
import { useFetchAnime } from "../hooks/useFetchAnime";
import { searchForAnime } from "../services/animeService";

const AnimeApp = () => {
    const {query} = useContext(AnimeContext)
    const {data, isLoading} = useFetchAnime(() => searchForAnime(query))

    if(isLoading) return <h4 style={{height: '100vh', textAlign: 'center'}}>...Loading...</h4>
    
  return (
    <>
        <h1>Anime World</h1>
      <div className="container">
      <TopAnime />
      <Animes getAnime={data || []}/>
      </div>
    </>

 
  )
}

export default AnimeApp

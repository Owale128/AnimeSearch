import '../sass/animeApp.scss'
import { useContext} from "react"
import TopAnime from "./TopAnime";
import Animes from "../components/Animes";
import Loading from "../components/Loading";
import { AnimeContext } from "../context/AnimeContext";
import { useFetchAnime } from "../hooks/useFetchAnime";
import { searchForAnime } from "../services/animeService";

const AnimeApp = () => {
    const {query} = useContext(AnimeContext)
    const {data, isLoading} = useFetchAnime(() => searchForAnime(query), [query])

    if(isLoading) return <Loading />
    
  return (
    <>
      <div className="container">
      <TopAnime />
      <Animes getAnime={data || []}/>
      </div>
    </>

 
  )
}

export default AnimeApp

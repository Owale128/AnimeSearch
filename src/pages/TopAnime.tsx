import { useEffect, useState } from "react"
import { IAnime } from "../model/IAnime"
import ShowTopAnime from "../components/ShowTopAnime"
import '../sass/topAnime.scss'
import PopularAnime from "./PopularAnime"
import { getTopAnime } from "../services/animeService"


const TopAnime = () => {
    const [TopAnime, setTopAnime] = useState<IAnime[]>([])

        useEffect(() => {
            const fetchTopAnime = async () => {
                try {
                    const data= await getTopAnime()
                    setTopAnime(data)
                    console.log(data,' top anime')
                } catch (error) {
                    console.error('Could not fetch error', error)
                }
            }
            fetchTopAnime()
        }, [])

  return (
    <div className="topAnimeContainer">
        <h2>Top Anime</h2>
      <ShowTopAnime topAnime={TopAnime}/>
        <h2>Popular Anime</h2>
        <PopularAnime />
    </div>
  )
}

export default TopAnime

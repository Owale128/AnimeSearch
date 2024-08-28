import { useEffect, useState } from "react"
import { IAnime } from "../model/IAnime"
import axios from "axios"
import ShowTopAnime from "../components/ShowTopAnime"
import '../sass/ShowTopAnime.scss'


const TopAnime = () => {
    const [TopAnime, setTopAnime] = useState<IAnime[]>([])

        useEffect(() => {
            const fetchTopAnime = async () => {
                try {
                    const repsonse = await axios.get('https://api.jikan.moe/v4/top/anime')
                    setTopAnime(repsonse.data.data)
                    console.log(repsonse.data.data,' top anime')
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
    </div>
  )
}

export default TopAnime

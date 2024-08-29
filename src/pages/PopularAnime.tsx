import { useEffect, useState } from "react"
import { IAnime } from "../model/IAnime"
import axios from "axios"
import ShowPopularAnime from "../components/ShowPopularAnime"
import '../sass/popularAnime.scss'


const PopularAnime = () => {
    const [popularAnime, setPopularAnime] = useState<IAnime[]>([])

    useEffect(() => {
        const fetchPopularAnime = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/anime?order_by=popularity')
                setPopularAnime(response.data.data)
                console.log(response.data.data, 'Popular Anime')
            } catch (error) {
                console.log('Could not fetch', error)
            }
        }
        fetchPopularAnime()
    }, [])

  return (
    <div className="popularAnimeContainer">
      <ShowPopularAnime popularAnime={popularAnime} />
    </div>
  )
}

export default PopularAnime

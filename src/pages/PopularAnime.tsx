import { useEffect, useState } from "react"
import { IAnime } from "../model/IAnime"
import ShowPopularAnime from "../components/ShowPopularAnime"
import '../sass/popularAnime.scss'
import { getPopularAnime } from "../services/animeService"


const PopularAnime = () => {
    const [popularAnime, setPopularAnime] = useState<IAnime[]>([])

    useEffect(() => {
        const fetchPopularAnime = async () => {
            try {
                const data = await getPopularAnime()
                setPopularAnime(data)
                console.log(data, 'Popular Anime')
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

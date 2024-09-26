import { useContext } from "react"
import { AnimeContext } from "../context/AnimeContext"

const SavedAnimes = () => {
  const {savedAnime} = useContext(AnimeContext)
    
  return (
    <div>
      <h1>Saved Anime</h1>
      {savedAnime.length === 0 ? (
        <p>No Anime Saved!</p>
      ) : (
        <ul style={{listStyle: 'none'}}>
          {savedAnime.map((anime) => (
            <li key={anime.mal_id}>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <h3>{anime.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SavedAnimes

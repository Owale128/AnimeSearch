import { useContext } from "react"
import { AnimeContext } from "../context/AnimeContext"
import '../sass/savedAnime.scss';

const SavedAnimes = () => {
  const {savedAnime, setSavedAnime} = useContext(AnimeContext)

  const removeAnime = (id: number) => {
   const updatedSavedAnime = savedAnime.filter((anime) => anime.mal_id !== id)
    setSavedAnime(updatedSavedAnime)
  }
    
  return (
    <div className="savedAnimeContainer">
      <h1>Saved Anime</h1>
      {savedAnime.length === 0 ? (
        <p>
          No Anime Saved!
          <br />
          <span>🫠</span>
        </p>
      ) : (
        <ul style={{listStyle: 'none'}}>
          {savedAnime.map((anime) => (
            <li key={anime.mal_id}>
              <h3 className="animeTitle">{anime.title}</h3>
              <img src={anime.images.jpg.image_url} alt={anime.title} className="animeImg" />
              <button onClick={() => removeAnime(anime.mal_id)} className="removeBtn">Remove</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SavedAnimes

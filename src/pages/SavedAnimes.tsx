import { useContext } from "react"
import { AnimeContext } from "../context/AnimeContext"
import StarRating from "../components/StarRating";
import '../sass/savedAnime.scss';

const SavedAnimes = () => {
  const {savedAnime, setSavedAnime} = useContext(AnimeContext)

  const handleRating = (id: number, rating: number) => {
    const updatedSavedAnime = savedAnime.map((anime) =>
      anime.mal_id === id ? { ...anime, score: rating } : anime
    );
    setSavedAnime(updatedSavedAnime);
  };

  const removeAnime = (id: number) => {
   const updatedSavedAnime = savedAnime.filter((anime) => anime.mal_id !== id)
    setSavedAnime(updatedSavedAnime)
  }

  const sortedAnime = [...savedAnime].sort((a, b) => (b.score || 0) - (a.score || 0) )
    
  return (
    <div className="savedAnimeContainer">
      <h1>Saved Anime</h1>
      {sortedAnime.length === 0 ? (
        <p>
          No Anime Saved!
          <br />
          <span>🫠</span>
        </p>
      ) : (
        <ul style={{listStyle: 'none'}}>
          {sortedAnime.map((anime) => (
            <li key={anime.mal_id}>
              <h3 className="animeTitle">{anime.title}</h3>
              <img src={anime.images.jpg.image_url} alt={anime.title} className="animeImg" />
              <StarRating 
              rating={anime.score || 0}
              onRating={(rating) => handleRating(anime.mal_id, rating)}
              />
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

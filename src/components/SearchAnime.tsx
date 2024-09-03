import '../sass/searchAnime.scss'
import { AnimeContext } from "../context/AnimeContext";
import { FormEvent, useContext, useState } from "react";

const SearchAnime = () => {
    const {setQuery} = useContext(AnimeContext)
    const [inputValue, setInputValue] = useState('')

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        if(inputValue.trim() !== ''){
            setQuery(inputValue)
            setInputValue('')  
        }
    } 

  return (
    <form onSubmit={handleSearch}>
    <input type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Search for anime"
    />
    <button className="formBtn">Search</button>
   </form>
  )
}

export default SearchAnime

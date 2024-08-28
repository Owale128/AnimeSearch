import { FormEvent, useState } from "react";
import '../sass/searchAnime.scss'

interface ISearchAnime {
    setQuery: (searchText: string) => void;
}

const SearchAnime = ({setQuery}: ISearchAnime) => {
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
    <button>Search</button>
   </form>
  )
}

export default SearchAnime

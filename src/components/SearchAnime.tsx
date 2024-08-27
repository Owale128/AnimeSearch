import { FormEvent, useState } from "react";

interface ISearchAnime {
    setQuery: (searchText: string) => void;
}

const SearchAnime = ({setQuery}: ISearchAnime) => {
    const [inputValue, setInputValue] = useState('')

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        setQuery(inputValue)  
    } 

  return (
   <form onSubmit={handleSearch}>
    <input type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
    <button>Search</button>
   </form>
  )
}

export default SearchAnime

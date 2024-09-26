import { createContext } from "react";
import { IAnime } from "../model/IAnime";

export interface IAnimeContext {
    savedAnime: IAnime[];
    setSavedAnime: (anime: IAnime[]) => void;
    query: string;
    setQuery: (newQuery: string) => void;
} 

export const AnimeContext = createContext<IAnimeContext>( {
    savedAnime: [],
    setSavedAnime: () => {},
    query: '',
    setQuery: () => {}
})
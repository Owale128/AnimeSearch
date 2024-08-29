import { createContext } from "react";

export interface IAnimeContext {
    query: string;
    setQuery: (newQuery: string) => void;
} 

export const AnimeContext = createContext<IAnimeContext>( {
    query: '',
    setQuery: () => {}
})
import { createContext } from "react";
import { IAnime } from "../model/IAnime";

export interface IAnimeContext {
    myAnimes: IAnime[];  
}

export const AnimeContext = createContext<IAnimeContext>({
    myAnimes: []
})
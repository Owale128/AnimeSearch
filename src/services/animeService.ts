import { IAnime } from "../model/IAnime";
import { IAnimeResponse } from "../model/IAnimeResponse";
import { get } from "./serviceBase";

const BASE_URL = 'https://api.jikan.moe/v4/'

export const searchForAnime = async (query: string): Promise<IAnime[]> => {
        const response = await get<IAnimeResponse>(`${BASE_URL}anime?q=${query}`); 
        return response.data
}

export const getPopularAnime = async (): Promise<IAnime[]> => {
        const response = await get<IAnimeResponse>(`${BASE_URL}anime?order_by=popularity`) 
        return response.data
}
export const getTopAnime = async (): Promise<IAnime[]> => {
        const response = await get<IAnimeResponse>(`${BASE_URL}top/anime`) 
        return response.data
}

export const getAnimeDetails = async (id: string): Promise<IAnime> => {
        const response = await get<{data: IAnime}>(`${BASE_URL}anime/${id}`)
        return response.data
}
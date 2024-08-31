import { DependencyList, useEffect, useState } from "react"


export const useFetchAnime = <T>(serviceFunction: () => Promise<T>, dependencies: DependencyList ) => {
    const[data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const savedAnime = localStorage.getItem('animes');
                if(savedAnime) {
                    setData(JSON.parse(savedAnime))
                }
                const result = await serviceFunction()
                setData(result)
                localStorage.setItem('animes', JSON.stringify(result))
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, dependencies)

    return{data, isLoading}
}
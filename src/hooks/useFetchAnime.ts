import { useEffect, useState } from "react"


export const useFetchAnime = <T>(serviceFunction: () => Promise<T>) => {
    const[data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const result = await serviceFunction()
                setData(result)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        if(!data) fetchData()
    }, [serviceFunction])

    return{data, isLoading}
}
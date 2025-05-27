import { useEffect, useState, useCallback } from "react"

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchData = useCallback(() => {
        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw new Error('Network error')

                console.log(res)
                return res.json()
            })
            .then(json => { 
                console.log('Manual fetch:', json)
                console.log('Raw:', JSON.stringify(json, null, 2))
                setData(json)
             })
            .catch(err => setError(err.message))
    }, [url])

    useEffect(() => {
        console.log("fetching data")

        fetchData()
    }, [fetchData])

    return {data, refetch: fetchData, error}
}
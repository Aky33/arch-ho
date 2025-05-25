import { useEffect, useState } from "react"

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true
        setLoading(true)
      
        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw new Error('Network error')

                console.log("res: " + res)
                return res.json()
            })
            .then(json => { 
                console.log("json: " + json)
                return isMounted && setData(json) 
            })
            .catch(err => isMounted && setError(err.message))
            .finally(() => isMounted && setLoading(false))

        return () => {
            isMounted = false
        }
    }, [url])

    return {data, loading, error}
}
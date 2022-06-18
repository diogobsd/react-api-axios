import { useState,useEffect } from "react"
import axios, { AxiosRequestConfig } from "axios"

/* DEFINE API URL */
const api = axios.create({
    baseURL: 'http://api.github.com'
})

/* DEFINE AXIOS ACTION */
export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        /* api = axios */
        api.get(url, options)
        .then(response => {
          setData(response.data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setIsFetching(false)
        })
      }, [])

      return { data, isFetching }
}
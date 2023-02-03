import { useEffect, useState } from 'react'
import { API_TOKEN, API_URL } from '../config'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    function fetchData() {
      setLoading(true)
      fetch(`${API_URL}${url}`, {
        headers: {
          Authorization: 'bearer ' + API_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          console.log(err)
          setLoading(false)
        })
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch

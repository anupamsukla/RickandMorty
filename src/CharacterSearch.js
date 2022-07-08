import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useCharacterSearch(query, pageNumber) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [Characters, setCharacters] = useState([])
  const [hasMore, setHasMore] = useState(false)
  useEffect(() => {
    setCharacters([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/',
      params: { name: query, page: pageNumber },
    }).then(res => {
      setCharacters(el => [...el, ...res.data.results])
      setHasMore(res.data.info.pages > pageNumber)
      setLoading(false)
    }).catch(e => {
      setError(true)
      setLoading(false)
    })
  }
    , [query, pageNumber])
  return { loading, error, Characters, hasMore }
}

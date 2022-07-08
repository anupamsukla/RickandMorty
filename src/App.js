import React, { useState, useRef, useCallback } from 'react'
import CharacterSearch from './CharacterSearch'
import './App.css'
import Carddetail from './components/Carddetails'
import Card from './components/Card'
import Searchbar from './components/Searchbar'
export default function App() {
  const [query, setQuery] = useState("")
  const [name, setname] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [visible, setVisible] = useState(false)
  const [popdata, setpopdata] = useState(null)

  const debounce = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  const debouncedapicall = useCallback(debounce((val) => {
    setQuery(val)
    setPageNumber(1)
  }
    , 400), []);


  const handleSearch = (e) => {
    setname(e.target.value)
    debouncedapicall(e.target.value);
  }

  const {
    Characters,
    hasMore,
    loading,
    error
  } = CharacterSearch(query, pageNumber)



  const observer = useRef()
  const lastCharElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])


  const mappeddata = Characters.map((char, index) => {
    return <div className='container' ref={(Characters.length === index + 1) ? lastCharElementRef : null} key={index} onClick={(e) => {
      setVisible(true)
      setpopdata(char)
    }}>
      <Card char={char} index={index} datasize={Characters.length} />
    </div >
  })

  return (
    <div className='App'>
      <div className='Heading'>Rick and Morty Search</div>
      <Searchbar name={name} handleSearch={handleSearch} />
      {visible === true ? <Carddetail popdata={popdata} visible={visible} setVisible={setVisible} /> : null}
      {mappeddata}
      <div>{loading && 'Loading...'}</div>
      <div>{(!hasMore || error) && 'No more data to Display'}</div>
    </div>

  )
}


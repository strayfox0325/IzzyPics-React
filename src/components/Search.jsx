  /* Imports */

import React, {useState, useEffect } from 'react'
import MasonryLayout from './MasonryLayout'
import { client } from '../client'
import { feedQuery, FeedQuery, searchQuery, SearchQuery} from '../utils/data'
import Spinner from './Spinner'

  const Search = ({searchTerm}) => {

    /* Hooks */

    const [pins, setPins] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if(searchTerm) {
        setLoading(true)
        const query = searchQuery(searchTerm.toLowerCase())
        client
        .fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
      } else {
        client
        .fetch(feedQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
      }
    }, [searchTerm])
    
    /* Render */

    return (
      <div>
        {loading && <Spinner message="Looking for Pins..."/>}
        {pins?.length !== 0 && <MasonryLayout pins={pins}/>}
        {pins?.length === 0 && searchTerm !== '' && !loading && (
          <div className="mt-10 text-center text-xl">
            No Pins Found
          </div>
        )}
      </div>
    )
  }
  
  export default Search

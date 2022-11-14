import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// type QType={
//     q:string
// }

export default function SearchFilter() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState([]) // this will be used to populate jsx
  const navigate = useNavigate()
  const { q } = useParams()

  useEffect(() => {
    if (q) setQuery(q)
    navigate(`/search/${query}`)
    const Searchcars = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:4000/get?q=${query}`)
        const data = await response.json()
        if (response.ok) {
          setSearch(data) // we are getting the full search results based in query
        }
      } catch (error) {
        console.log(error) // Here we receive the error from the backend and can setan error /modal to show the error to user
      }
    }
    Searchcars()
  }, [query, q])



  console.log(search)
  return (
    <div>
      {/* <SearchBar/>
      <Filter/> */}
    </div> ///  design a searchbar and filter
  )
}

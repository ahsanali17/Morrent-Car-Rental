import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { CarsContext } from "../contexts/CarContext"

const Icon = styled.input`
  margin: 15px;
  width: 500px;
  height: 50px;
  text-indent: 10px;
  border: 1px solid #444;
  border-radius: 10px;
  display: block;
  cursor: pointer;
`

const SearchBar = () => {
  const context = useContext(CarsContext)
  const { addToQuery, searchActive } = context
  // const [active, setActive] = useState(false)
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  // console.log(active)
  useEffect(() => {
    addToQuery(query)
    query.length != 0 ? searchActive(true) : searchActive(false)
  }, [query])

  return (
    <form>
      <Icon
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        value={query}
        name="search"
      />
    </form>
  )
}
export default SearchBar

// const Searchcars = async (): Promise<void> => {
//   try {
//     const response = await fetch(`http://localhost:4000/get?q=${query}`)
//     const data = await response.json()
//     if (response.ok) {
//       setSearch(data) // we are getting the full search results based in query
//       addToSearch(search)
//     }
//   } catch (error) {
//     console.log(error) // Here we receive the error from the backend and can setan error /modal to show the error to user
//   }
// }
// Searchcars()

// useEffect(() => {
//   addToQuery(query)
//   if (query.length != 0) {
//     // her I want react to go to the search component (Searchfilter component)as soon as the user types where the search results are disyyplyed

//     setActive(true)
//   } else {
//     setActive(false)
//     navigate("/")
//   }
// }, [query, active])

// useEffect(() => {
//   if(active)
//   navigate("/hello")
// }, [active])

// const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   e.preventDefault()
//   navigate(`/search?query=${query}`)
// }

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
  const [active, setActive] = useState(false)
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState([])
  const navigate = useNavigate()
  console.log(active)
  useEffect(() => {
    addToQuery(query)
    if (query.length!=0) {  // her I want react to go to the search component (Searchfilter component)as soon as the user types where the search results are disyyplyed
      navigate(`/search?query=${query}`)
      setActive(true)
    } else {
      setActive(false)
      // navigate(-1)
    }
  }, [query,active])

  useEffect(() => {
    console.log(active,"active value")
  }, [active])

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault()
  //   navigate(`/search?query=${query}`)
  // }

  return (
    <>
      <Icon
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        value={query}
        name="search"
      />
      {/* <button onClick={(e) => handleClick(e)}>click</button> */}
    </>
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

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
  const { addToQuery, addToSearch } = context
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState([]) // this will be used to populate jsx
  const navigate = useNavigate()

  useEffect(() => {
    query ? navigate(`/search/`) : navigate(`/get/`)  //  i want t navigate to a new page when the user starts typing
    addToQuery(query)
    const Searchcars = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:4000/get?q=${query}`)
        const data = await response.json()
        if (response.ok) {
          setSearch(data) // we are getting the full search results based in query
          addToSearch(search)
        }
      } catch (error) {
        console.log(error) // Here we receive the error from the backend and can setan error /modal to show the error to user
      }
    }
    Searchcars()
  }, [query])
  return (
    <Icon
      type="text"
      placeholder="Search.."
      onChange={(e) => {
        setQuery(e.target.value)
      }}
      value={query}
      name="firstName"
    />
  )
}
export default SearchBar

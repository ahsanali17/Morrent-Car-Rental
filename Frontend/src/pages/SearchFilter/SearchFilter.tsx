import React, { useContext, useState } from "react"

import { CarsList } from "../../components"
import { CarsContext } from "../../contexts/CarContext"

export default function SearchFilter() {
  const context = useContext(CarsContext)
  const { searchItems, query } = context

 
  return (
    <div>
      ({query && <h3>You are searching for {`"${query}"`}</h3>}
      <CarsList searchItems={searchItems} />)
    </div>
  )
}

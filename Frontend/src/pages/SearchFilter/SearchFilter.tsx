import React, { useContext, useEffect } from "react"

import { CarsList, Filter } from "../../components"
import { CarsContext } from "../../contexts/CarsContext"
import { SearchWrapper } from "./styles"

export default function SearchFilter() {
  const context = useContext(CarsContext)
  const { cars, searchItems, query, addToSearch,searchFilter } = context

  useEffect(() => {
    console.log("useEffect", query)
    const searchCarList = cars.filter(
      (car) =>
        car.car_brand.toLowerCase().includes(query) ||
        car.car_name.toLowerCase().includes(query)
    )

    addToSearch(searchCarList)
  }, [query])

  return (
    <>
      {query && <h3>You are searching for - {`"${query}"`}</h3>}
      <SearchWrapper>
        <Filter />
        <CarsList searchItems={searchFilter(searchItems)} />
      </SearchWrapper>
    </>
  )
}

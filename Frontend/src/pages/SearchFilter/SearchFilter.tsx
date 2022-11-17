import React, { useContext, useEffect } from "react"

import { CarsList } from "../../components"
import { CarsContext } from "../../contexts/CarContext"
import { SearchWrapper } from "./styles"

export default function SearchFilter() {
  const context = useContext(CarsContext)
  const { cars, searchItems, query, addToSearch } = context
  useEffect(() => {
    const searchCarList = cars.filter(
      (car) =>
        car.car_brand.toLowerCase().includes(query) ||
        car.car_name.toLowerCase().includes(query)
    )

    addToSearch(searchCarList)
  }, [])
  console.log(searchItems)
  return (
    <>
      {query && <h3>You are searching for - {`"${query}"`}</h3>}
      <SearchWrapper>
        {"filter"}
        <CarsList searchItems={searchItems} />
      </SearchWrapper>
    </>
  )
}

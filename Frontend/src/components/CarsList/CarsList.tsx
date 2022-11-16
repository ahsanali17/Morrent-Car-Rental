import { FC, useContext } from "react"

import { CarsListWrapper, CarsListItems } from "./styles"
import { CarCard } from "../"
import { CarsContext, CarType } from "../../contexts/CarContext"


type carListProps={
  searchItems?:CarType[]
}

//  I am trying assert
const CarsList = ({ searchItems }: carListProps) => {
  const context = useContext(CarsContext)

  const { cars } = context
  return (
    <>
      {!searchItems && (
        <CarsListWrapper>
          <CarsListItems>
            {cars.map((car) => (
              <CarCard car={car} />
            ))}
          </CarsListItems>
        </CarsListWrapper>
      )}
      {searchItems && (
        <CarsListWrapper>
          <CarsListItems>
            {searchItems.map((searchItem:any) => (
              <CarCard car={searchItem} />
            ))}
          </CarsListItems>
        </CarsListWrapper>
      )}
    </>
  )
}

export default CarsList

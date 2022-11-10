import { FC, useContext } from "react";

import { CarsListWrapper, CarsListItems } from "./styles";

import { CarCard } from '..';
import { CarsContext } from "../../contexts/CarContext"



// const carsdummy = [
//   {
//     title: "Car title",
//     img: carImg,
//   },
// ]

const Cars: FC = () => {
  const context = useContext(CarsContext)

  const { cars } = context
  return (
    <CarsListWrapper>
      <CarsListItems>
        {/* dummy content */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((car) => (
          <CarCard car={car} />
        ))}

        {/* {cars.map((car) => (
          <CarCard car={car} />
        ))} */}
      </CarsListItems>
    </CarsListWrapper>
  )
}

export default Cars;
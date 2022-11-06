import { FC } from "react";

import { CarsListWrapper, CarsListItems } from "./styles";
import { CarCard } from '../';

const CarsList: FC = () => {
  return (
    <CarsListWrapper>
      <CarsListItems>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </CarsListItems>
    </CarsListWrapper>
  )
}

export default CarsList;
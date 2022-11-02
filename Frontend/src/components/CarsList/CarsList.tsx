import { FC } from "react";

import { CarsListWrapper } from "./styles";
import { CarCard } from '../';

const CarsList: FC = () => {
  return (
    <CarsListWrapper>
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
    </CarsListWrapper>
  )
}

export default CarsList;
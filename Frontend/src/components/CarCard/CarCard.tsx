import { FC } from "react";
import CarIcon from "../icons/CarIcon";
import GasIcon from "../icons/GasIcon";
import Liked from "../icons/Liked";
import RentNowBtn from "../icons/RentNowBtn";
import Users from "../icons/Users";

import {
  Article,
  CarCardWrapper,
  CardRow1,
  CardRow2,
  CardRow3,
  CardRow4,
  CardSpesification,
  CardSpesificationDiv,
  CardTag,
  CardTitle,
  PricePerDay,
  PricePerDaySmall,
} from "./styles";

const CarCard: FC = () => {
  return (
    <CarCardWrapper>
      <Article>
        <CardRow1>
          <CardTitle>
            Koenigsegg <CardTag>Sport</CardTag>
          </CardTitle>
          <Liked />
        </CardRow1>
        <CardRow2>
          <img src="./src/assets/cars/car.png" />
        </CardRow2>
        <CardRow3>
          <CardSpesificationDiv>
            <GasIcon />
            <CardSpesification>90L</CardSpesification>
          </CardSpesificationDiv>
          <CardSpesificationDiv>
            <CarIcon />
            <CardSpesification>Manual</CardSpesification>
          </CardSpesificationDiv>
          <CardSpesificationDiv>
            <Users />
            <CardSpesification>2 People</CardSpesification>
          </CardSpesificationDiv>
        </CardRow3>
        <CardRow4>
          <div>
            <PricePerDay>$99.00/<PricePerDaySmall>day</PricePerDaySmall></PricePerDay>
            <PricePerDaySmall>$100.00</PricePerDaySmall>
          </div>
          <RentNowBtn />
        </CardRow4>
      </Article>
    </CarCardWrapper>
  );
};

export default CarCard;

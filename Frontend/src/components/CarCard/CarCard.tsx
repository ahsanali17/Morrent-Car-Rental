import { FC } from "react";
import CarIcon from "../../assets/icons/CarIcon";
import GasIcon from "../../assets/icons/GasIcon";
import Liked from "../../assets/icons/Liked";
import Users from "../../assets/icons/Users";

import { Article, CarCardWrapper, CardRow1, CardRow2, CardRow3, CardRow4, CardSpesification, CardSpesificationDiv, CardTag, CardTitle, PricePerDay, PricePerDaySmall, RentNowButton} from "./styles";
import { useModalContext } from "../../contexts/ModalContext";

const CarCard: FC = () => {
  const { toggleModal } = useModalContext();

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
          <img src="./cars/car.png" />
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
          <RentNowButton onClick={toggleModal}>Rent Now</RentNowButton>
        </CardRow4>
      </Article>
    </CarCardWrapper>
  );
};

export default CarCard;

import { useContext, useEffect, useState } from "react"
import { CarsContext } from "../../contexts/CarsContext"

import { CarIcon, GasIcon, Liked, RentNowBtn, Users } from "../../assets/icons"
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
} from "./styles"

type CarCardType = {
  car: {}
}
const CarCard = ({ car }: CarCardType) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const { addToFavourite } = context

  useEffect(() => {})

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
            <PricePerDay>
              $99.00/<PricePerDaySmall>day</PricePerDaySmall>
            </PricePerDay>
            <PricePerDaySmall>$100.00</PricePerDaySmall>
          </div>
          <RentNowBtn />
        </CardRow4>
      </Article>
    </CarCardWrapper>
  )
}

export default CarCard

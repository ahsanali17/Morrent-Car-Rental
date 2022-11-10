import { FC, useContext, useEffect, useState } from "react"

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

import { CarIcon, GasIcon, Liked, RentNowBtn, Users } from '../../assets/icons'

import { CarsContext } from "../../contexts/CarContext"

import carImg from "/src/assets/cars/car.png"

type CarCardType = {
  car: {}
}
const CarCard = ({ car }: CarCardType) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const { addToFavourite } = context

  useEffect(() => { })

  const features = [
    {
      icon: <GasIcon />,
      title: "90L"
    },
    {
      icon: <CarIcon />,
      type: "Manual"
    },
    {
      icon: <Users />,
      qty: "2 People"
    },
  ]
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
          <img src={carImg} />
        </CardRow2>
        <CardRow3>
          {
            features.map((feature) => (
              <CardSpesificationDiv key={feature.type}>
                {feature.icon}
                <CardSpesification>{feature.type}</CardSpesification>
                <CardSpesification>{feature.qty}</CardSpesification>
              </CardSpesificationDiv>
            ))
          }
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

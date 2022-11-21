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
  Icon,
  PricePerDay,
  PricePerDaySmall,
  RentNowButton,
} from "./styles"
import { CarsContext } from "../../contexts/CarsContext"
import carImg from "/src/assets/cars/car.png"
import { FavoriteRed, GasIcon, Users, Wheel } from "../../assets/icon"
import { Link } from "react-router-dom"

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
      icon: <Icon src={GasIcon} />,
      title: "90L"
    },
    {
      icon: <Icon src={Wheel} />,
      type: "Manual"
    },
    {
      icon: <Icon src={Users} />,
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
          <Icon src={FavoriteRed} />
        </CardRow1>
        <CardRow2>
          <img src={carImg} />
        </CardRow2>
        <CardRow3>
          {
            features.map((feature) => (
              <CardSpesificationDiv key={feature.type}>
                {feature.icon} <CardSpesification>{feature.title}</CardSpesification>
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
          <RentNowButton>
            <Link to="/car-details" style={{ textDecoration: "none", color: "white" }}>
              Rent Now
            </Link>
          </RentNowButton>
        </CardRow4>
      </Article>
    </CarCardWrapper>
  )
}

export default CarCard

import { FC, useContext, useEffect, useState } from "react"

import { Article, CarCardWrapper, CardRow1, CardRow2, CardRow3, CardRow4, CardSpesification, CardSpesificationDiv, CardTag, CardTitle, Icon, PricePerDay, PricePerDaySmall, RentNowButton } from "./styles"

import { CarsContext } from "../../contexts/CarsContext"
import { useModalContext } from "../../contexts/ModalContext"
import { UserContextObj } from "../../contexts/UserContext"

import carImg from "/src/assets/cars/car.png"
import { FavoriteRed, GasIcon, Users, Wheel, Favorite } from "../../assets/icon"
import { Link } from "react-router-dom"
import { CarType } from "../../contexts/CarsContext"

type lSType = {
  [gId: number]: {
    [carId:number]:boolean
  }[]
}

type CarCardType = {
  car: CarType
}

const CarCard = ({ car }: CarCardType) => {
  const [favourite, setFavourite] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const { googleId } = useContext(UserContextObj)
  const gId = parseInt(googleId)
  const { addToFavourite } = context
  const [carFavourite, setCarFavourite] = useState<CarFavouriteType>({ googleId: parseInt(googleId) | 0, isFavourite: false, } as CarFavouriteType)
  
  console.log(car)

  useEffect(() => {
    if (gId) {
      console.log("ran")
      let lS: lSType = JSON.parse(localStorage.getItem("isFavourite") as string)
      if (Object.keys(lS).includes(googleId)) {
        setUserId(gId)
        setUserValue(false)
        console.log(lS, ":LS")
      } else {
        setUserId(gId)
        setUserValue(false)
        let lS: lSType = JSON.parse(
          localStorage.getItem("isFavourite") as string
        )
        localStorage.setItem(
          "isFavourite",
          JSON.stringify({ ...lS, [gId]:{...[carId],[carId]:userValue} })
        )
      }
    } else {
      setUserId(0)
      setUserValue(false)
    }
  }, [gId])

  useEffect(() => {
    setUserId(userId)
    setUserValue(favourite)
    let lS: lSType = JSON.parse(localStorage.getItem("isFavourite") as string)
    localStorage.setItem(
      "isFavourite",
      JSON.stringify({ ...lS,[gId]:{...[carId],[carId]:userValue}})
    )
    console.log(lS, ":LS")
  }, [favourite])
  const handleFavourite = (id: number) => {
    setFavourite((prevState) => !prevState)
    addToFavourite(id)
  }
  // console.log(googleId)

  const features = [
    {
      icon: <Icon src={GasIcon} />,
      title: `${car.maximum_gasoline}L`,
    },
    {
      icon: <Icon src={Wheel} />,
      type: "Manual",
    },
    {
      icon: <Icon src={Users} />,
      qty: `${car.seat_capacity} People`,
    },
  ]
  return (
    <CarCardWrapper>
      <Article>
        <CardRow1>
          <CardTitle>
            {car.car_title} <CardTag>{car.car_body_type}</CardTag>
          </CardTitle>
          <Icon
            src={gId ? (userValue ? FavoriteRed : Favorite) : Favorite}
            onClick={() => handleFavourite(car._id)}
          />
        </CardRow1>
        <CardRow2>
          <img src={car.file_path} />
        </CardRow2>
        <CardRow3>
          {features.map((feature) => (
            <CardSpesificationDiv key={feature.type}>
              {feature.icon}{" "}
              <CardSpesification>{feature.title}</CardSpesification>
              <CardSpesification>{feature.type}</CardSpesification>
              <CardSpesification>{feature.qty}</CardSpesification>
            </CardSpesificationDiv>
          ))}
        </CardRow3>
        <CardRow4>
          <div>
            <PricePerDay>
              ${car.daily_rate}/<PricePerDaySmall>day</PricePerDaySmall>
            </PricePerDay>
            <PricePerDaySmall>${car.daily_rate}</PricePerDaySmall>
          </div>
          <RentNowButton>
            <Link
              to="/car-details"
              style={{ textDecoration: "none", color: "white" }}
            >
              Rent Now
            </Link>
          </RentNowButton>
        </CardRow4>
      </Article>
    </CarCardWrapper>
  )
}

export default CarCard

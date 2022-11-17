import { FC, useContext } from "react"

import {
  Header,
  FeaturedCards,
  PickUpDropOff,
  Footer,
  PopularCar,
  RecomendationCar,
} from "../../components"
import { HomeWrapper } from "./styles"
import { CarsContext } from "../../contexts/CarContext"
import SearchFilter from "../../components/SearchFilter/SearchFilter"

const Home: FC = () => {
  const context = useContext(CarsContext)
  const { isSearchActive } = context
  console.log("isseacrcactive", isSearchActive)
  return (
    <HomeWrapper>
      <Header />
      {!isSearchActive && <FeaturedCards />}
      <PickUpDropOff />
      {!isSearchActive && (
        <>
          <PopularCar />
          <RecomendationCar />
        </>
      )}
      {isSearchActive && <SearchFilter/>}
      <Footer />
    </HomeWrapper>
  )
}

export default Home

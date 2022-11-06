import { FC } from 'react';

import { Header, FeaturedCards, PickUpDropOff, Footer, PopularCar, RecomendationCar } from '../../components';
import { HomeWrapper } from './styles';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <FeaturedCards />
      <PickUpDropOff />
      <PopularCar />
      <RecomendationCar />
      <Footer />
    </HomeWrapper>
  )
}

export default Home;
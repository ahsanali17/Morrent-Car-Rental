import { FC } from 'react';

import { Header, FeaturedCards, PickUpDropOff, CarsList, Footer } from '../../components';
import { HomeWrapper } from './styles';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <FeaturedCards />
      <PickUpDropOff />
      <CarsList />
      <Footer />
    </HomeWrapper>
  )
}

export default Home;
import { FC } from 'react';

import { Header, Footer, AsideLeft, DetailCar } from '../../components';
import { CarsForRent, RentedCars } from '../../components/CarsList';
import { CarDetailsWrapper, Container, MainContent } from './styles';


const CarDetails: FC = () => {
    return (
        <CarDetailsWrapper>
            <Header />
            <Container>
                <AsideLeft />
                <MainContent>
                    <DetailCar />
                    <RentedCars />
                    <CarsForRent />
                </MainContent>
            </Container>
            <Footer />
        </CarDetailsWrapper>
    )
}

export default CarDetails; 
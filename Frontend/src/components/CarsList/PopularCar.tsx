import React from 'react'
import CarCard from '../CarCard/CarCard'
import CarsList from './CarsList'
import { PopularCarDiv, PopularCarHorizontal, PopularCarSection, PopularCarTitle, PopularCarViewAll } from './styles'

const PopularCar = () => {
    return (
        <PopularCarSection>
            <PopularCarDiv>
                <PopularCarTitle>Popular Car</PopularCarTitle>
                <PopularCarViewAll>View All</PopularCarViewAll>
            </PopularCarDiv>
            <PopularCarHorizontal>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </PopularCarHorizontal>
        </PopularCarSection>
    )
}

export default PopularCar
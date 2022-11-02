import React from 'react'
import CarCard from '../CarCard/CarCard'
import CarsList from './CarsList'
import { PopularCarDiv, PopularCarHorizontal, PopularCarTitle, PopularCarViewAll } from './styles'

const PopularCar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", margin: '2rem' }}>
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
        </div>
    )
}

export default PopularCar
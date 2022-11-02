import React from 'react'
import CarCard from '../CarCard/CarCard'
import CarsList from './CarsList'
import { PopularCarDiv, PopularCarHorizontal, PopularCarTitle, PopularCarViewAll } from './styles'

const RecomendationCar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <PopularCarDiv>
                <PopularCarTitle>Recomendation Car</PopularCarTitle>
                <PopularCarViewAll>View All</PopularCarViewAll>
            </PopularCarDiv>
            <CarsList />
        </div>
    )
}

export default RecomendationCar
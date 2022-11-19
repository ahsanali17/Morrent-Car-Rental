import React from 'react'

import { PopularCarTitle, PopularCarViewAll, RecommendedCarDiv } from './styles'

import CarsList from './Cars'

const RecomendationCar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <RecommendedCarDiv>
                <PopularCarTitle>Recomendation Car</PopularCarTitle>
                <PopularCarViewAll>View All</PopularCarViewAll>
            </RecommendedCarDiv>
            <CarsList />
        </div>
    )
}

export default RecomendationCar
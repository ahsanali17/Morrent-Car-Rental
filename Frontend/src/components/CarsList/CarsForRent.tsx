import React from 'react'

import { PopularCarDiv, PopularCarHorizontal, PopularCarSection, PopularCarTitle, PopularCarViewAll } from './styles'

import CarCard from '../CarCard/CarCard'

const CarsForRent = () => {
    return (

        <PopularCarSection>
            <PopularCarDiv>
                <PopularCarTitle>Cars for Rent</PopularCarTitle>
                <PopularCarViewAll>View All</PopularCarViewAll>
            </PopularCarDiv>
            <PopularCarHorizontal>
                {/* dummy content */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((car) => (
                    <CarCard car={car} />
                ))}
            </PopularCarHorizontal>
        </PopularCarSection>
    )
}

export default CarsForRent
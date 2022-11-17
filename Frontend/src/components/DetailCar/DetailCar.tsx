import React from 'react'
import SingleFeaturedCard3 from '../SingleFeaturedCard/SingleFeaturedCard3'
import { CarDetailImages, Container, InnerDiv } from './styles'

import carview1 from '../../assets/img/carview1.png'
import carview2 from '../../assets/img/carview2.png'
import carview3 from '../../assets/img/carview3.png'

const DetailCar = () => {
    return (
        <Container>
            <InnerDiv>
                <div><SingleFeaturedCard3 /></div>
                <CarDetailImages>
                    <div><img src={carview1} /></div>
                    <div><img src={carview2} /></div>
                    <div><img src={carview3} /></div>
                </CarDetailImages>
            </InnerDiv>
            <div></div>
        </Container>
    )
}

export default DetailCar
import { FC } from "react";

import { FeaturedContent, FeaturedContentDesc, FeaturedContentImage, FeaturedContentTitle, FeaturedImage, FeaturedWrapper } from "./styles";

import ButtonLightBlueLg from "../ButtonLightBlueLg";
import { PickUpBg2 } from "../../assets";

import car from "/src/assets/cars/car3.png";


const SingleFeaturedCard2: FC = () => {
    return (
        <FeaturedWrapper>
            <PickUpBg2></PickUpBg2>
            <FeaturedContent>
                <FeaturedContentTitle>
                    <h1>Easy way to rent a car at a low price</h1>
                </FeaturedContentTitle>
                <FeaturedContentDesc>
                    <h3>Providing cheap car rental services and safe and comfortable facilities.</h3>
                </FeaturedContentDesc>
                <ButtonLightBlueLg />
                <FeaturedContentImage>
                    <FeaturedImage src={car} />
                </FeaturedContentImage>
            </FeaturedContent>
        </FeaturedWrapper>
    );
};

export default SingleFeaturedCard2;

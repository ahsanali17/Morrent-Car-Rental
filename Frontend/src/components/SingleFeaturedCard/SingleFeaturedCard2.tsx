import { FC } from "react";
import ButtonLightBlueLg from "../ButtonLightBlueLg";
import PickUpBg2 from "../FeaturedCards/PickUpBg2";

import {
    FeaturedContent,
    FeaturedContentDesc,
    FeaturedContentImage,
    FeaturedContentTitle,
    FeaturedImage,
    FeaturedWrapper,
} from "./styles";

const SingleFeaturedCard2: FC = () => {
    return (
        <FeaturedWrapper>
            <PickUpBg2 />
            <FeaturedContent>
                <FeaturedContentTitle>
                    Easy way to rent a car at a low price
                </FeaturedContentTitle>
                <FeaturedContentDesc>
                    Providing cheap car rental services and safe and comfortable facilities.
                </FeaturedContentDesc>
                <ButtonLightBlueLg />
                <FeaturedContentImage>
                    <FeaturedImage src="./cars/car3.png" />
                </FeaturedContentImage>
            </FeaturedContent>
        </FeaturedWrapper>
    );
};

export default SingleFeaturedCard2;

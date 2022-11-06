import { FC } from "react";
import ButtonBlueLg from "../ButtonBlueLg";
import PickUpBg from "../FeaturedCards/PickUpBg";

import { FeaturedContent, FeaturedContentDesc, FeaturedContentImage, FeaturedContentTitle, FeaturedImage, FeaturedWrapper } from "./styles";

const SingleFeaturedCard: FC = () => {
  return (
    <FeaturedWrapper>
      <PickUpBg />
      <FeaturedContent >
        <FeaturedContentTitle>
          <h1>The Best Platform for Car Rental</h1>
        </FeaturedContentTitle>
        <FeaturedContentDesc>
          <h3>Ease of doing a car rental safely and reliably. Of course at a low price.</h3></FeaturedContentDesc>
        <ButtonBlueLg />
        <FeaturedContentImage>
          <FeaturedImage src="./cars/car2.png" />
        </FeaturedContentImage>
      </FeaturedContent>
    </FeaturedWrapper>
  )
}

export default SingleFeaturedCard;
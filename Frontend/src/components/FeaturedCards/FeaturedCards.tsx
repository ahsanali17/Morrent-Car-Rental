import { FC } from "react";

import { FeaturedCardsWrapper } from "./styles";
import { SingleFeaturedCard } from '../';

const FeaturedCards: FC = () => {
  return (
    <FeaturedCardsWrapper>
      <SingleFeaturedCard />
      <SingleFeaturedCard />
    </FeaturedCardsWrapper>
  )
}

export default FeaturedCards;
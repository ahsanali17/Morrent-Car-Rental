import { FC } from "react";

import { FeaturedCardsWrapper, FeaturedHorizontal, Input, SearchSettings, SearchSettingsContainer } from "./styles";
import { SingleFeaturedCard, SingleFeaturedCard2 } from '../';
import SearchIcon from "../../assets/icons/SearchIcon";
import Filter from "../../assets/icons/Filter";

const FeaturedCards: FC = () => {
  return (
    <>
      <SearchSettings>
        <SearchSettingsContainer>
          <SearchIcon />
          <Input type="text" placeholder="Search something here" />
        </SearchSettingsContainer>
        <Filter />
      </SearchSettings>
      <FeaturedHorizontal>
        <FeaturedCardsWrapper>
          <SingleFeaturedCard />
          <SingleFeaturedCard2 />
        </FeaturedCardsWrapper>
      </FeaturedHorizontal>
    </>
  )
}

export default FeaturedCards;
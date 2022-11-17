import { FC } from "react";

import { FeaturedCardsWrapper, FeaturedHorizontal, Input, SearchIconElement, SearchSettings, SearchSettingsContainer } from "./styles";

import { SingleFeaturedCard, SingleFeaturedCard2 } from '..';
import { FilterIcon, SearchIcon } from "../../assets/icon";

const FeaturedCards: FC = () => {
  return (
    <>
      <SearchSettings>
        <SearchSettingsContainer>
          <SearchIconElement src={SearchIcon} />
          <Input type="text" placeholder="Search something here" />
        </SearchSettingsContainer>
        <img src={FilterIcon} />
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
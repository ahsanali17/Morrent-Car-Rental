import { FC } from "react";
import DownArrow from "../icons/DownArrow";
import Title from "../icons/PickupTitle";

import { PickUpContainer, PickUpDiv, PickUpDiv2, PickUpItem, PickUpTitle, PickUpWrapper, SelectCity, SelectDiv } from "./styles";

const PickUp: FC = () => {
  return (
    <PickUpWrapper>
      <Title />
      <PickUpItem>
        <PickUpDiv>
          <PickUpTitle>Locations</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
        <PickUpDiv2>
          <PickUpTitle>Locations</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv2>
        <PickUpDiv>
          <PickUpTitle>Locations</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
      </PickUpItem>
    </PickUpWrapper>
  )
}

export default PickUp;
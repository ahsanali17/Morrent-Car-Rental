import { FC } from "react";
import DownArrow from "../../assets/icons/DownArrow";
import Title from "../../assets/icons/PickupTitle";

import { PickUpHeaderContainer, PickUpHeader, PickUpLabel, PickUpDiv, PickUpDiv2, PickUpItem, PickUpTitle, PickUpWrapper, SelectCity, SelectDiv } from "./styles";

const PickUp: FC = () => {
  return (
    <PickUpWrapper>
      <PickUpHeaderContainer>
        <PickUpHeader type="radio"/>
        <PickUpLabel>Pick-Up</PickUpLabel>
      </PickUpHeaderContainer>
      <PickUpItem>
        <PickUpDiv>
          <PickUpTitle>Locations</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
        <PickUpDiv2>
          <PickUpTitle>Date</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select Your Date</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv2>
        <PickUpDiv>
          <PickUpTitle>Time</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select your time</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
      </PickUpItem>
    </PickUpWrapper>
  )
}

export default PickUp;
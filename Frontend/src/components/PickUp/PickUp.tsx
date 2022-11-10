import { FC } from "react";

import { PickUpHeaderContainer, PickUpHeader, PickUpLabel, PickUpDiv, PickUpDiv2, PickUpItem, PickUpTitle, PickUpWrapper, SelectCity, SelectDiv } from "./styles";

import DownArrow from "../../assets/icons/DownArrow";

const PickUp: FC = () => {
  return (
    <PickUpWrapper>
      <PickUpHeaderContainer>
        <PickUpHeader type="radio" checked />
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
            <SelectCity>Select Date</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv2>
        <PickUpDiv>
          <PickUpTitle>Time</PickUpTitle>
          <SelectDiv>
            <SelectCity>Select Time</SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
      </PickUpItem>
    </PickUpWrapper>
  )
}

export default PickUp;
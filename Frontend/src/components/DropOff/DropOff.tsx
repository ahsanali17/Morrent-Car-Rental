import { FC } from "react";

import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";

import DownArrow from "../../assets/icons/DownArrow";


const DropOff: FC = () => {
  return (
    <DropOffWrapper>
      <DropOffHeaderContainer>
        <DropOffHeader type="radio" checked />
        <DropOffLabel>Drop-Off</DropOffLabel>
      </DropOffHeaderContainer>
      <DropOffItem>
        <DropOffDiv>
          <DropOffTitle>Locations</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv>
        <DropOffDiv2>
          <DropOffTitle>Date</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select Date</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv2>
        <DropOffDiv>
          <DropOffTitle>Time</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select Time</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv>
      </DropOffItem>
    </DropOffWrapper>
  )
}

export default DropOff;
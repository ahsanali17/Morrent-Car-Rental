import { FC } from "react";

import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv, DropDownArrow } from "./styles";

import { DownArrow } from "../../assets/icon";


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
            <DropDownArrow alt="dropdown" src={DownArrow} />
          </SelectDiv>
        </DropOffDiv>
        <DropOffDiv2>
          <DropOffTitle>Date</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select Date</SelectCity>
            <DropDownArrow alt="dropdown" src={DownArrow} />
          </SelectDiv>
        </DropOffDiv2>
        <DropOffDiv>
          <DropOffTitle>Time</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select Time</SelectCity>
            <DropDownArrow alt="dropdown" src={DownArrow} />
          </SelectDiv>
        </DropOffDiv>
      </DropOffItem>
    </DropOffWrapper>
  )
}

export default DropOff;
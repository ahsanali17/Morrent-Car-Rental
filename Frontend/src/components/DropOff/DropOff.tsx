import { FC } from "react";
import DownArrow from "../../assets/icons/DownArrow";
import Title from "../../assets/icons/DropOffTitle";
import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";


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
          <DropOffTitle>Locations</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv2>
        <DropOffDiv>
          <DropOffTitle>Locations</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select City</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv>
      </DropOffItem>
    </DropOffWrapper>
  )
}

export default DropOff;
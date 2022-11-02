import { FC } from "react";
import DownArrow from "../icons/DownArrow";
import Title from "../icons/DropOffTitle";
import { DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";


const DropOff: FC = () => {
  return (
    <DropOffWrapper>
      <Title />
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
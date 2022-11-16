import { FC } from "react";

import DownArrow from "../../assets/icons/DownArrow";
import { DropDown } from '../';
import { CITIES } from "../../utils/constants";
import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";
import { useDropDownContext } from "../../contexts/DropDownContext";

const DropOff: FC = () => {
  const { handleOpenMenu } = useDropDownContext();

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
            <DownArrow handleOpen={handleOpenMenu}/>
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
      <DropDown dropDownItems={CITIES}/>
    </DropOffWrapper>
  )
}

export default DropOff;
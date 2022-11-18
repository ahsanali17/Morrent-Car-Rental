import { FC } from "react";

import DownArrow from "../../assets/icons/DownArrow";
import { DropDown } from '../';
import { CITIES } from "../../utils/constants";
import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";
import { useDropDownContext } from "../../contexts/DropDownContext";
import { usePickUpDropOffContext } from "../../contexts/PickUpDropOffContext";

const DropOff: FC = () => {
  const { handleOpenMenu2, openMenu2 } = useDropDownContext();
  const { locationTwoChange, state } = usePickUpDropOffContext();

  return (
    <DropOffWrapper>
      <DropOffHeaderContainer>
        <DropOffHeader type="radio" checked />
        <DropOffLabel>Drop-Off</DropOffLabel>
      </DropOffHeaderContainer>
      <DropOffItem>
        <DropOffDiv>
          <DropOffTitle><h4>Locations</h4></DropOffTitle>
          <SelectDiv>
            <SelectCity><h5>{state.location2.length > 0 ? state.location2: 'Select City'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu2}/>
          </SelectDiv>
        </DropOffDiv>
        <DropOffDiv2>
          <DropOffTitle>Date</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select your date</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv2>
        <DropOffDiv>
          <DropOffTitle>Time</DropOffTitle>
          <SelectDiv>
            <SelectCity>Select your time</SelectCity>
            <DownArrow />
          </SelectDiv>
        </DropOffDiv>
      </DropOffItem>
      <DropDown dropDownItems={CITIES} openMenu={openMenu2} dispatchClickFunction={locationTwoChange} handleDropDownClose={handleOpenMenu2}/>
    </DropOffWrapper>
  )
}

export default DropOff;
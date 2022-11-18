import { FC } from "react";
import DownArrow from "../../assets/icons/DownArrow";

import { PickUpHeaderContainer, PickUpHeader, PickUpLabel, PickUpDiv, PickUpDiv2, PickUpItem, PickUpTitle, PickUpWrapper, SelectCity, SelectDiv } from "./styles";
import { DropDown } from '../';
import { CITIES } from "../../utils/constants";
import { useDropDownContext } from "../../contexts/DropDownContext";
import { usePickUpDropOffContext } from "../../contexts/PickUpDropOffContext";

const PickUp: FC = () => {
  const { handleOpenMenu, openMenu } = useDropDownContext();
  const { locationOneChange, state } = usePickUpDropOffContext();

  return (
    <PickUpWrapper>
      <PickUpHeaderContainer>
        <PickUpHeader type="radio" checked />
        <PickUpLabel>Pick-Up</PickUpLabel>
      </PickUpHeaderContainer>
      <PickUpItem>
        <PickUpDiv>
          <PickUpTitle><h4>Locations</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>{state.location1.length > 0 ? state.location1: 'Select City'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu}/>
          </SelectDiv>
        </PickUpDiv>
        <PickUpDiv2>
          <PickUpTitle><h4>Date</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>Select Your Date</h5></SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv2>
        <PickUpDiv>
          <PickUpTitle><h4>Time</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>Select your time</h5></SelectCity>
            <DownArrow />
          </SelectDiv>
        </PickUpDiv>
      </PickUpItem>
      <DropDown dropDownItems={CITIES} openMenu={openMenu} dispatchClickFunction={locationOneChange} handleDropDownClose={handleOpenMenu}/>
    </PickUpWrapper>
  )
}

export default PickUp;
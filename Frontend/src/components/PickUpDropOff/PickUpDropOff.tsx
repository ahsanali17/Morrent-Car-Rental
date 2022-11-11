import { FC } from "react";

import { PickUpDropContainer, PickUpDropOffWrapper } from "./styles";
import { PickUp, UpDownButton, DropOff } from '../';

const PickUpDropOff: FC = () => {
  return (
    <PickUpDropOffWrapper>
      <PickUpDropContainer>
        <PickUp />
        <UpDownButton />
        <DropOff />
      </PickUpDropContainer>
    </PickUpDropOffWrapper>
  )
}

export default PickUpDropOff;
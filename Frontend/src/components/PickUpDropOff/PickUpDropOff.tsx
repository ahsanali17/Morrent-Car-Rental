import { FC } from "react";

import { PickUpDropOffWrapper } from "./styles";
import { PickUp, UpDownButton, DropOff } from '../';

const PickUpDropOff: FC = () => {
  return (
    <PickUpDropOffWrapper>
      <PickUp />
      <UpDownButton />
      <DropOff />
    </PickUpDropOffWrapper>
  )
}

export default PickUpDropOff;
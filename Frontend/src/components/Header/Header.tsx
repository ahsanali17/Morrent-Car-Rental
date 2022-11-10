import { FC } from "react";
import { GoogleLogIn } from "..";

import { HeaderWrapper } from "./styles";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
      <GoogleLogIn />
    </HeaderWrapper>
  );
};

export default Header;

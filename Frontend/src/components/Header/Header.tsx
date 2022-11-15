import { FC } from "react";
import { GoogleLogIn } from "..";

import { HeaderWrapper, HeaderFeaturesContainer } from "./styles";
import {
  NavIcon,
  BellIcon,
  LikeIcon,
  SettingIcon,
  AvatarIcon,
} from "../../assets";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <NavIcon />
      <HeaderFeaturesContainer>
        <BellIcon />
        <LikeIcon />
        <SettingIcon />
        <AvatarIcon />
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  );
};

export default Header;

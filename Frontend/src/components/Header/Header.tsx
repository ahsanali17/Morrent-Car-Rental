import { FC } from "react";

import { HeaderWrapper, HeaderFeaturesContainer } from "./styles";
import {
  NavIcon,
  BellIcon,
  LikeIcon,
  SettingIcon,
  AvatarIcon,
  GoogleIconBtn,
} from "../../assets";

const Header: FC = () => {
  const signIn = () => {
    // The link below will change to the deployed server endpoint in the future, currently it is using the server running on localhost
    window.open("http://localhost:9090/auth/google/login", "_self");
  };

  return (
    <HeaderWrapper>
      <NavIcon />
      <HeaderFeaturesContainer>
        <BellIcon />
        <LikeIcon />
        <SettingIcon />
        <AvatarIcon />
        <GoogleIconBtn onClick={signIn} />
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  );
};

export default Header;

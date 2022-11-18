import { FC, useContext } from "react";

import { HeaderWrapper, HeaderFeaturesContainer } from "./styles";
import {
  NavIcon,
  BellIcon,
  LikeIcon,
  SettingIcon,
  AvatarIcon,
  GoogleIconBtn,
  LogoutIconButton,
} from "../../assets";
import { UserContextObj } from "../../contexts/UserContext";

const Header: FC = () => {
  const ServerLink = "http://localhost:9090";

  const userObject = useContext(UserContextObj);
  console.log("Data:", userObject?._id);

  const login = () => {
    // The link below will change to the deployed server endpoint in the future, currently it is using the server running on localhost
    window.open(`${ServerLink}/auth/google/login`, "_self");
  };

  const logout = () => {
    window.open(`${ServerLink}/auth/google/logout`, "_self");
  };

  return (
    <HeaderWrapper>
      <NavIcon />
      <HeaderFeaturesContainer>
        <BellIcon />
        <LikeIcon />
        <SettingIcon />
        {userObject?._id ? <AvatarIcon /> : <GoogleIconBtn onClick={login} />}
        {userObject?._id && <LogoutIconButton onClick={logout} />}
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  );
};

export default Header;

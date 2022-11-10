import { FC } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, HeaderFeaturesContainer } from "./styles";
import { NavIcon, BellIcon, LikeIcon, SettingIcon, AvatarIcon } from "../../assets";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <NavIcon />
      <HeaderFeaturesContainer>
        <BellIcon />
        <LikeIcon />
        <SettingIcon />
        <Link to="/profile">
          <AvatarIcon />
        </Link>
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  )
}

export default Header;
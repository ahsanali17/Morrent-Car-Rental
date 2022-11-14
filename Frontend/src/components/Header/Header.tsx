import { FC } from "react";

import { HeaderWrapper, HeaderFeaturesContainer } from "./styles";
import { NavIcon, BellIcon, LikeIcon, SettingIcon, AvatarIcon,SearchBar } from "../../assets";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <NavIcon/>
      <SearchBar/>
      <HeaderFeaturesContainer>
        <BellIcon />
        <LikeIcon />
        <SettingIcon />
        <AvatarIcon />
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  )
}

export default Header;
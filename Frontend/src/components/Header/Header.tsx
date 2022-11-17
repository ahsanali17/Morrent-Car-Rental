import { FC } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, HeaderFeaturesContainer, Icon, AppLogo, Avatar } from "./styles";

import { Favorite, Logo, Notification, Settings } from "../../assets/icon";
import AvatarImg from "/src/assets/img/nav-avatar.png";


const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <AppLogo src={Logo} />
      </Link>
      <HeaderFeaturesContainer>
        <Icon src={Notification} />
        <Icon src={Favorite} />
        <Icon src={Settings} />
        <Link to="/profile">
          <Avatar src={AvatarImg} />
        </Link>
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  )
}

export default Header;
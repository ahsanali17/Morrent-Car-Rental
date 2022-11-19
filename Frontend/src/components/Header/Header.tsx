import { FC } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, HeaderFeaturesContainer, Icon, AppLogo, Avatar } from "./styles";

import { Favorite, Logo, Notification, Settings } from "../../assets/icon";
import AvatarImg from "/src/assets/img/nav-avatar.png";
import SearchBar from "../SearchBar/SearchBar";


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
      <Link to="/">
        <AppLogo src={Logo} />
      </Link>
      <HeaderFeaturesContainer>
        <SearchBar showSearchBar={false} showFilter={true} />
        <Icon src={Notification} />
        <Icon src={Favorite} />
        <Icon src={Settings} />
        <Link to="/profile">
          <Avatar src={AvatarImg} />
        </Link>
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  );
};

export default Header;

import styled from 'styled-components';

import Avatar from "/src/assets/img/nav-avatar.png";

const Icon = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

const AvatarIcon = () => {
  return (
    <Icon src={Avatar} alt="avatar" />
  )
}
export default AvatarIcon;
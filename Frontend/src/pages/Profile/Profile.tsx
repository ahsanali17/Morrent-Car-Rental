import { FC } from "react";

import { Header, Footer, ProfileComponent } from "../../components";
import { ProfileWrapper } from "./styles";

const Profile: FC = () => {
  return (
    // Make change to develop
    <ProfileWrapper>
      <ProfileComponent />
      <Footer />
    </ProfileWrapper>
  );
};

export default Profile;

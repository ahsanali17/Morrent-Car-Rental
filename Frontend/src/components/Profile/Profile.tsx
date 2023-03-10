import { Button, Cover, DivCover, MoreBtn, MoreDiv, ProfileDetails, ProfileDetailsDiv, ProfileEditBtn, ProfileEditBtnIcon, ProfileName, ProfilePic, ProfileRole, ProfileSection } from './styles'

import cover from '/src/assets/img/cover.png'
import profileImg from '/src/assets/img/profile-pic.png'

import { MdModeEditOutline } from 'react-icons/md';
import { CarsForRent, RentedCars } from '../CarsList';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    return (
        <>
            <ProfileSection>
                <DivCover><Cover src={cover} /></DivCover>
                <Button>Edit Cover</Button>
                <DivCover>
                    <ProfileDetailsDiv>
                        <ProfileDetails>
                            <ProfileName>Jane Daniel</ProfileName>
                            <ProfileRole>Agent</ProfileRole>
                        </ProfileDetails>
                        <ProfileEditBtn>Edit Profile</ProfileEditBtn>
                        <ProfileEditBtnIcon><MdModeEditOutline /></ProfileEditBtnIcon>
                    </ProfileDetailsDiv>
                </DivCover>
                <ProfilePic src={profileImg} alt='profile' />
            </ProfileSection>
            <RentedCars />
            <CarsForRent />
            <MoreDiv>
                <Link to='/add-car' style={{ textDecoration: 'none' }}><MoreBtn>Add More Cars for Rent</MoreBtn></Link>

            </MoreDiv>
        </>
    )
}

export default ProfileComponent
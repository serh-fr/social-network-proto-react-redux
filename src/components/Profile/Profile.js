import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, updateUserStatus, editProfile, userIdFromUrl, saveAvatar}) => {

    return (
        <div>
            <ProfileInfo 
                profile={profile.profile} 
                status={profile.status} 
                updateUserStatus={updateUserStatus} 
                editProfile={editProfile}
                userIdFromUrl={userIdFromUrl}
                saveAvatar={saveAvatar}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
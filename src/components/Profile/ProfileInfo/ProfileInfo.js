import React from 'react';
import cs from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import Avatar from '../../common/avatar/Avatar';
import { useState } from 'react';
import UpdateProfileForm from './UpdateProfileForm';

const ProfileInfo = ({profile, status, updateUserStatus, editProfile, userIdFromUrl, saveAvatar}) => {

    let [updateProfile, setUpdateProfile] = useState(false);

    if(!profile) {
        return <Preloader />
    }

    const editProfileSubmit = (formData) => {
        editProfile(formData);
        setUpdateProfile(false);
    }

    const selectAvatar = e => {
        if(e.target.files.length) {
            const file = e.target.files[0];
            saveAvatar(file);
        }
    }

    return <div className={cs.profile}>
        {!updateProfile && 
            <>
                <div className={cs.profilePhoto}>
                    <Avatar img={profile.photos.large} cs={cs.profileAvatar}>
                        <div className={cs.selectAvatar}>
                            <input id={'avatar'} type={'file'} name='avatar' onChange={selectAvatar} />
                            <label htmlFor={'avatar'}>Select your avatar</label>
                        </div>
                    </Avatar>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} userIdFromUrl={userIdFromUrl}/>
                </div>
                <div className={cs.profileInfo}>
                    <p><b>Name:</b> {profile.fullName}</p>
                    <p><b>About me:</b> {profile.aboutMe}</p>
                    <p><b>Job search?</b>  <span>{profile.lookingForAJob ? 'Yes': 'No'}</span></p>
                    <p><b>Keywords: </b>{profile.lookingForAJobDescription || null}</p>
                    <div className={cs.profileContacts}>
                        <p><b>Contacts</b></p>
                        <Contacts contacts={profile.contacts} />
                    </div>
                </div>
            </>
        }
        <div className={cs.updateProfile}>
            {!userIdFromUrl 
            ? !updateProfile && <button onClick={() => {setUpdateProfile(true)}}>Edit profile</button>
            : null}
            {updateProfile && <UpdateProfileForm setUpdateProfile={setUpdateProfile} onSubmit={editProfileSubmit} />}
        </div>
    </div>
}

const Contacts = ({contacts}) => {

    return <div>
        {Object.keys(contacts).map(key => {
            return <div key={key}>
                {contacts[key] && `${key}: ${contacts[key]}`}
            </div>
        })}
    </div>
}

export default ProfileInfo;
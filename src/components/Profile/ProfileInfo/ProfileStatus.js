import React, { useState, useEffect } from 'react';
import cs from './ProfileInfo.module.css';

const ProfileStatus = ({status, updateUserStatus, userIdFromUrl}) => {

    let statusField = React.createRef();

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    useEffect( () => {
        setLocalStatus(status);
    }, [status] )

    const changeStatus = () => {
        if(!userIdFromUrl) {
            setEditMode(true);
        }
    }

    const onStatusChange = (e) => {
        setLocalStatus(e.target.value);
    }

    const saveStatus = () => {
        let statusText = statusField.current.value;
        updateUserStatus(statusText);
        setEditMode(false);
    }

    return <div className={cs.profileStatus}>
        {!editMode && 
            <div className={cs.status}>
                {!userIdFromUrl && <span>Click to change your status</span>}
                <p onClick={changeStatus}>Status: {localStatus || 'no status'}</p>
            </div>
        }
        {editMode && 
            <div className={cs.changeStatus}>
                <div>
                    <input ref={statusField} onChange={onStatusChange}  value={localStatus} type='text' />
                </div>
                <div className={cs.saveStatus}>
                    <button onClick={saveStatus} type='button'>Save status</button>
                </div>
            </div>
        }
    </div>
}

export default ProfileStatus;
import React from 'react';
import avatar from '../../../assets/images/avatarIkon.png';

const Avatar = ({img, cs, ...props}) => {
    if(!img) return <img alt='' src={avatar} />

    return <div className={cs}>
        <img alt='' src={img} />
        {props.children}
    </div>
}

export default Avatar;
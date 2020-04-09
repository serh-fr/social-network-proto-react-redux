import React from 'react';
import cs from './User.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../../common/avatar/Avatar';

const User = ({user, subscribeUser, unsubscribeUser, isSubscribeProgress}) => {

    let onSubscribe = userId => {
        if(!user.followed) {
            subscribeUser(user.id);
        } else {
            unsubscribeUser(user.id);
        }
    }

    return (
        <div className={cs.userItem}>
            <div className={cs.userAvatar}>
                <div>
                    <NavLink to={`/profile/${user.id}`} >
                        <Avatar img={user.photos.large} />
                    </NavLink>
                </div>
                <div>
                    <button 
                        disabled={isSubscribeProgress.some(id => id === user.id)} 
                        onClick = { onSubscribe }> {user.followed ? 'Unsubscribe' : 'Subscribe'} </button>
                </div>
            </div>
            <div className={cs.userInfo}>
                <div>
                    {user.name}
                </div>
            </div>
        </div>
    )
}

export default User;
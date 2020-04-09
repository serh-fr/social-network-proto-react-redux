import React from 'react';
import User from './User/User';
import Pagination from '../common/pagination/Pagination';
import cs from './Users.module.css';

const Users = ({users, isSubscribeProgress, subscribeUser, unsubscribeUser, ...propsToPagination}) => {

    return <>
        <div className={cs.usersContainer}>
            {users.map(user => <User key={user.id}
                isSubscribeProgress={isSubscribeProgress} user={user}
                subscribeUser={subscribeUser}
                unsubscribeUser={unsubscribeUser} />)}
        </div>
        <Pagination {...propsToPagination}/>
    </>
}

export default Users;
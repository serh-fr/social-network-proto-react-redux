import React from 'react';
import cs from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = ({id, user}) => {
    return <div className={cs.dialog}>
        <img alt='' src='https://www.navily.com/images/default_boat.png' />
        <NavLink to={`/dialogs/${id}`} activeClassName={cs.active}>{user}</NavLink>
    </div>
}

export default Dialog;
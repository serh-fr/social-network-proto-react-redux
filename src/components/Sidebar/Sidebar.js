import React from 'react';
import cs from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = props => {
    return <nav className={cs.nav}>
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={cs.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={cs.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/users' activeClassName={cs.active}>Users</NavLink>
                </li>
            </ul>
        </nav>

}

export default Sidebar;
import React from 'react';
import cs from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login, logoutUser}) => {
    return (
        <header className={cs.header}>
            <img alt='' src='https://i3.wp.com/tvseriesfinale.com/wp-content/uploads/2016/01/1800x1500.jpg' />
            <div className={cs.login}>
                {isAuth ? <>
                    <div>
                        {login}
                    </div>
                    <div>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
                </>
                : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
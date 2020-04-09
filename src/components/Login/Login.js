import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginReduxForm from './LoginForm';
import cs from './Login.module.css';

const Login = ({isAuth, loginUser, captcha}) => {

    if(isAuth) {
        return <Redirect to='/profile' />
    }

    return <div className={cs.loginContainer}>
        <h3>Login</h3>
        <LoginReduxForm captcha={captcha} onSubmit={(formData) => loginUser(formData)} />
    </div>
}

export default Login;
import React from 'react';
import {reduxForm, Field} from 'redux-form';
import cs from './Login.module.css';
import { FormField } from '../common/formControl';
import { maxLength, required } from '../../utils/validate';

let maxLength30 = maxLength(30);
let Input = FormField('input');

const LoginForm = ({captcha, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field type={'text'} placeholder='Email' name={'email'} component={Input} validate={[required, maxLength30]}/>
        </div>
        <div>
            <Field placeholder='Password' name={'password'} type={'password'} component={Input} validate={[required, maxLength30]} />
        </div>
        <div>
            <Field type='checkbox' name={'rememberMe'} component={'input'} /> remember me
        </div>
        <div className={cs.formError}>
            {error}
        </div>
        {captcha && 
            <div className={cs.captcha}>
                <p>Enter the code from the image, please</p>
                <img src={captcha} alt='' />
                <Field name={'captcha'} component={Input} validate={[required]} />
            </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
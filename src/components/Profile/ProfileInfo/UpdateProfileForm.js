import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { FormField } from '../../common/formControl';
import { required } from '../../../utils/validate';

let Input = FormField('input');

const Form = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type={'text'} placeholder={'About me'} name={'aboutMe'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'lookingForAJob'} component={'input'} /> Job search?
            <Field type={'text'} placeholder={'Description'} name={'lookingForAJobDescription'} component={Input} />
        </div>
        <div>
            <Field type={'text'} placeholder={'Full Name'} name={'fullName'} component={Input} validate={[required]}/>
        </div>
        <div>
            <p>Contacts</p>
            <Field type={'text'} placeholder={'Facebook'} name={'facebook'} component={Input} />
            <Field type={'text'} placeholder={'Github'} name={'github'} component={Input} />
            <Field type={'text'} placeholder={'Instagram'} name={'instagram'} component={Input} />
            <Field type={'text'} placeholder={'Twitter'} name={'twitter'} component={Input} />
            <Field type={'text'} placeholder={'Vk'} name={'vk'} component={Input} />
            <Field type={'text'} placeholder={'Youtube'} name={'youtube'} component={Input} />
            <Field type={'text'} placeholder={'Website'} name={'website'} component={Input} />
        </div>
        <div>
            {props.error}
        </div>
        <div>
            <button>Edit</button>
        </div>
    </form>
}

const UpdateProfileForm = reduxForm({
    form: 'updateProfile'
})(Form);

export default UpdateProfileForm;
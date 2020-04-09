import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormField } from '../../common/formControl';
import { required, maxLength } from '../../../utils/validate';

const maxLength10 = maxLength(10);
const Textarea = FormField('textarea');

const AddPostForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name={'post'} component={Textarea} placeholder={'Write your post'} validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

export default reduxForm({
    form: 'addPostForm'
})(AddPostForm);
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../utils/validate';
import { FormField } from '../common/formControl';

let maxLength10 = maxLength(10);
const Textarea = FormField('textarea');

const DialogsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field placeholder={'Write your message'} component={Textarea} name={'message'} validate={[required, maxLength10]} />
        <div>
            <button>Send message</button>
        </div>
    </form>
}

export default reduxForm({
    form: 'dialogsForm'
})(DialogsForm)
import React from 'react';
import cs from './index.module.css';

export const FormField = Element => ({input, meta, ...props}) => {
    
    let hasError = meta.touched && meta.error;
    return <div className={`${cs.field} ${hasError && cs.fieldError}`}>
        <Element {...input} {...props} />
        <div>
            <span>{hasError ? meta.error : ''}</span>
        </div>
    </div>
}
import React from 'react';
import cs from './Message.module.css';

const Message = ({message}) => <div className={cs.message}>{message}</div>

export default Message;
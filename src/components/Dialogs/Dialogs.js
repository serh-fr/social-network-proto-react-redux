import React from 'react';
import cs from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import DialogsForm from './DialogsForm';

const Dialogs = ({dialogs, sendMessage}) => {

    const dialogsElements = dialogs.dialogs.map( dialog => <Dialog key={dialog.id} id={dialog.id} user={dialog.name} />);

    const messagesElements = dialogs.messages.map( message => <Message key={message.id} id={message.id} message={message.message} />);

    return <div className={cs.dialogs}>
        <div className={cs.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={cs.messages}>
            { messagesElements }
            <div className={cs.messageForm}>
                <DialogsForm onSubmit={formData => sendMessage(formData)}/>
            </div>
        </div>
    </div>
}

export default Dialogs;
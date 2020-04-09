import React from 'react';
import {sendMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs } from '../../redux/selectors/dialogs-selector';

const DialogsContainer = props => {
    return <Dialogs {...props} />
}

let mapStateToProps = state => {
    return {
        dialogs: getDialogs(state)
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer);
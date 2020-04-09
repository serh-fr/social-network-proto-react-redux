import React, {Component} from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import {loginUser} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { getIsAuth, getCaptcha } from '../../redux/selectors/auth-selector';

class LoginContainer extends Component {
    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state),
        captcha: getCaptcha(state)
    }
}

export default compose(
    connect(mapStateToProps, {loginUser})
)(LoginContainer);
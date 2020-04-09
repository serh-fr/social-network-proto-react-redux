import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutUser} from '../../redux/auth-reducer';
import { getIsAuth, getLogin } from '../../redux/selectors/auth-selector';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);
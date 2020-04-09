import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    const AuthRedirectContainer = (props) => {
        if(!props.isAuth) return <Redirect to='/login' />

        return <Component {...props} />
    }

    return connect(mapStateToProps)(AuthRedirectContainer);
}

export default withAuthRedirect;
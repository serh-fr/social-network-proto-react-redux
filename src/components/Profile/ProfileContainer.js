import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileUser, getUserStatus, updateUserStatus, editProfile, saveAvatar} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfile } from '../../redux/selectors/profile-selector';
import { getUserId } from '../../redux/selectors/auth-selector';

class ProfileContainer extends React.Component {

    getUserId = () => {
        debugger
        let userIdFromUrl = this.props.match.params.userId;

        if(!userIdFromUrl) {
            return this.props.userId;
        }

        return parseInt(userIdFromUrl);
    }

    getStatus = () => {
        const {getUserStatus} = this.props;

        return getUserStatus(this.getUserId());
    }

    getProfile = () => {
        const {getProfileUser} = this.props;

        return getProfileUser(this.getUserId());
    }

    componentDidMount() {
        this.getProfile();
        this.getStatus();
    }

    componentDidUpdate(prevProps) {
        debugger
        if(JSON.stringify(this.props.profile.profile) !== JSON.stringify(prevProps.profile.profile)) {
            this.getProfile();
            this.getStatus();
        }

        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile();
            this.getStatus();
        }
    }

    render() {


        return <Profile 
            profile={this.props.profile} 
            updateUserStatus={this.props.updateUserStatus} 
            editProfile={this.props.editProfile}
            userIdFromUrl={this.props.match.params.userId}
            saveAvatar={this.props.saveAvatar} />
    }
}



let mapStateToProps = state => {
    return {
        profile: getProfile(state),
        userId: getUserId(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateUserStatus, editProfile, saveAvatar}),
    withRouter
)(ProfileContainer)
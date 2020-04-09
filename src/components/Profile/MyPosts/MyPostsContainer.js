import React from 'react';
import {addPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getProfile } from '../../../redux/selectors/profile-selector';

let mapStateToProps = state => {
    return {
        profile: getProfile(state)
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
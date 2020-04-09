import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, post: 'Hello, world!', likes: 20},
        {id: 2, post: 'It is my first react project', likes: 15}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                post: action.formData.post,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost,  ...state.posts]
            };
        }
        case SET_PROFILE: {
            
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPost = formData => ({ type: ADD_POST, formData });
export const setProfile = profile => ({type: SET_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});
export const deletePost = postId => ({type: DELETE_POST, postId});

export const getProfileUser = userId => async dispatch => {
    let response = await profileAPI.getProfileUser(userId);

    dispatch(setProfile(response.data)); 
}


export const getUserStatus = userId => async dispatch => {
    let response = await profileAPI.getUserStatus(userId);

    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = status => () => {
    profileAPI.updateUserStatus(status);
}

export const editProfile = data => async dispatch => {

    const {aboutMe, lookingForAJob, lookingForAJobDescription, fullName, ...contacts} = data;

    const dataProfile = {aboutMe, lookingForAJob, lookingForAJobDescription, fullName, contacts};
    
    let response = await profileAPI.editProfile(dataProfile);

    if(response.data.resultCode === 0) {
        dispatch(setProfile(dataProfile));
    }
}

export const saveAvatar = avatar => async dispatch => {
    let response = await profileAPI.saveAvatar(avatar);
    if(response.data.resultCode === 0) {
        dispatch(setProfile(response.data.data.photos));
    }


}

export default profileReducer;
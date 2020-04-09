import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.url
            }
        }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, login, email, isAuth) => ({ type: SET_USER_AUTH_DATA, data: {userId, login, email, isAuth} });
export const setCaptcha = url => ({type: SET_CAPTCHA, url});

export const authMe = () => async dispatch => {
    let response = await authAPI.me();

    if(!response.data.resultCode) {
        let {id, login, email} = response.data.data;
        dispatch(setUserAuthData(id, login, email, true));
    }
 }

export const loginUser = data => async dispatch => {
    let response = await authAPI.login(data);

    if(response.data.resultCode === 0) {
        dispatch(authMe());
    } 
    else if(response.data.resultCode === 10) {
        let response =  await authAPI.captcha();
        dispatch(setCaptcha(response.data.url));
    }
    else {
        dispatch(stopSubmit('login', {_error: response.data.messages.length ? response.data.messages[0] : 'Some error'}));
    }
}

export const logoutUser = () => async dispatch => {
    let response = await authAPI.logout();

    if(!response.data.resultCode) {
        dispatch(setUserAuthData(null, null, null, false));
    }
}

export default authReducer;
import { authMe } from "./auth-reducer";
import { dialogsAPI } from "../api/api";

const SET_INITIALISATION = 'SET_INITIALISATION';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALISATION: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

const setInitialisation = () => ({type: SET_INITIALISATION});

export const initialisation = () => dispatch => {
    let promiseMe = dispatch(authMe());

    Promise.all([promiseMe])
        .then(() => {
            dispatch(setInitialisation());
        })
}

export default appReducer;
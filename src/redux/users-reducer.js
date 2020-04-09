import { userAPI } from "../api/api";

const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SELECT_PAGE = 'SELECT_PAGE';
const TOGGLE_IS_LOAD= 'TOGGLE_IS_LOAD';
const TOGGLE_SUBSCRIBE_PROGRESS = 'TOGGLE_SUBSCRIBE_PROGRESS';
const SET_SERIES_PAGE = 'SET_SERIES_PAGE';

let initialState = {
    users: [],
    countPages: 12,
    currentPage: 1,
    seriesPage: 1,
    totalPages: 0,
    isLoad: false,
    isSubscribeProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalPages: action.totalCount
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_LOAD:
            return {
                ...state,
                isLoad: action.isLoad
            }
        case TOGGLE_SUBSCRIBE_PROGRESS: 
            return {
                ...state,
                isSubscribeProgress: action.isProgress 
                ? [...state.isSubscribeProgress, action.userId] 
                : state.isSubscribeProgress.filter(id => id !== action.userId)
            }
        case SET_SERIES_PAGE: {
            return {
                ...state,
                seriesPage: action.seriesPage
            }
        }
        default:
            return state
    }
}

export const onSubscribe = userId => ({type: SUBSCRIBE, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const selectPage = pageNumber => ({type: SELECT_PAGE, pageNumber});
export const toggleIsLoad = isLoad => ({type: TOGGLE_IS_LOAD, isLoad});
export const toggleSubscribeProgress = (isProgress, userId) => ({type: TOGGLE_SUBSCRIBE_PROGRESS, isProgress, userId});
export const setSeriesPage = seriesPage => ({type: SET_SERIES_PAGE, seriesPage})

export const requestUsers = (countPages, currentPage) => async dispatch => {
    dispatch(selectPage(currentPage));
    dispatch(toggleIsLoad(true));

    let response = await userAPI.getUsers(countPages, currentPage);

    dispatch(toggleIsLoad(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalCount(response.data.totalCount));
}

const subscribeToggle = async (dispatch, userId, apiMethod, actionCreators) => {
    const {toggleSubscribeProgress} = {...actionCreators};

    dispatch(toggleSubscribeProgress(true, userId));

    let response = await apiMethod(userId);
    if(response.data.resultCode === 0) {
        dispatch(onSubscribe(userId));
    }

    dispatch(toggleSubscribeProgress(false, userId));
}


export const subscribeUser = userId => async dispatch => {
    subscribeToggle(dispatch, userId, userAPI.subscribeUser, {toggleSubscribeProgress});
}


export const unsubscribeUser = userId => async dispatch => {
    subscribeToggle(dispatch, userId, userAPI.unsubscribeUser, {toggleSubscribeProgress});
}


export default usersReducer;
import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
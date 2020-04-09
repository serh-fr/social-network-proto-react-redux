const getAuth = state => state.auth;
export const getIsAuth = state => getAuth(state).isAuth;
export const getLogin = state => getAuth(state).login;
export const getUserId = state => getAuth(state).userId;
export const getCaptcha = state => getAuth(state).captcha;
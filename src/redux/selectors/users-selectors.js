const getUser = state => state.users;

export const getUsersList = state => getUser(state).users;

export const getCountPages = state => getUser(state).countPages;

export const getCurrentPage = state => getUser(state).currentPage;

export const getTotalPages = state => getUser(state).totalPages;

export const getIsLoad = state => getUser(state).isLoad;

export const getIsSubscribeProgress = state => getUser(state).isSubscribeProgress;

export const getSeries = state => getUser(state).seriesPage;
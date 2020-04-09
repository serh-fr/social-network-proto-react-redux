import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4e906d15-3cea-4038-94e8-8b265e32c72f'
    }
})

export const userAPI = {
    getUsers(countPages = 10, currentPage = 1) {
        return instance.get(`users?count=${countPages}&page=${currentPage}`);
    },

    subscribeUser(userId) {
        return instance.post(`follow/${userId}`);
    },

    unsubscribeUser(userId) {
        return instance.delete(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`);
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status});
    },

    editProfile(data) {
        return instance.put(`profile`, {...data});
    },

    saveAvatar(avatar) {
        const formData = new FormData();
        formData.append('photo', avatar);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(data) {
        return instance.post(`auth/login`, {...data});
    },

    logout() {
        return instance.delete(`auth/login`);
    },

    captcha() {
        return instance.get(`security/get-captcha-url`);
    }
}
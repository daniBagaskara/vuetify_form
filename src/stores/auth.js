import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        fullname: localStorage.getItem('fullname') || null,
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
    }),
    getters: {
        getFullName: (state) => state.fullname,
        getAccessToken: (state) => state.accessToken,
        getRefreshToken: (state) => state.refreshToken,
        isAuthenticated: (state) => !!state.accessToken,
    },
    actions: {
        setFullName(fullname) {
            this.fullname = fullname;
            if (fullname) {
                localStorage.setItem('fullname', JSON.stringify(fullname));
            } else {
                localStorage.removeItem('fullname');
            }
        },
        setAccessToken(token) {
            this.accessToken = token;
            if (token) {
                localStorage.setItem('accessToken', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } else {
                localStorage.removeItem('accessToken');
                delete axios.defaults.headers.common['Authorization'];
            }
        },
        setRefreshToken(token) {
            this.refreshToken = token;
            if (token) {
                localStorage.setItem('refreshToken', token);
            } else {
                localStorage.removeItem('refreshToken');
            }
        },
        clearAuthData() {
            this.fullname = null;
            this.accessToken = null;
            this.refreshToken = null;
            localStorage.removeItem('fullname');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            delete axios.defaults.headers.common['Authorization'];
        },
        init() {
            if (this.accessToken) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
            }
        },
    },
});

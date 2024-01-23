// store.js
import {defineStore} from 'pinia';
import axios from "axios";
import router from "@/router/index.js";
import api from "@/services/api.js";

function get_profile_from_storage() {
    try {
        return JSON.parse(localStorage.getItem('profile'));
    } catch (e) {
        return null;
    }
}

const default_5xx_error = {
    'data': {
        'custom_code': -1,
        'message': 'Something went wrong',
        'data': null,
        'details': [],
    }
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        expiresIn: localStorage.getItem('expiresIn'),
        profile: get_profile_from_storage(),
    }),
    actions: {
        authorize(response, redirect = true) {
            const response_data = response.data;

            if (response_data.custom_code !== 0) {
                return response_data;
            }

            const auth_data = response_data.data;

            this.accessToken = auth_data.access_token;
            this.refreshToken = auth_data.refresh_token;
            this.expiresIn = auth_data.expires_in;
            this.profile = auth_data.profile;

            localStorage.setItem('accessToken', this.accessToken);
            localStorage.setItem('refreshToken', this.refreshToken);
            localStorage.setItem('expiresIn', this.expiresIn);
            localStorage.setItem('profile', JSON.stringify(this.profile));
            if (redirect) {

                router.push('/movies');
            }
        },
        async login(email, password) {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
                'email': email, 'password': password,
            }, {
                headers: {
                    'Content-Type': 'application/json', 'X-API-KEY': import.meta.env.VITE_AUTH_TOKEN,
                },
            }).catch((error) => {
                return default_5xx_error;
            });
            return this.authorize(response)
        },
        async register(name, email, password) {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
                'name': name, 'email': email, 'password': password,
            }, {
                headers: {
                    'Content-Type': 'application/json', 'X-API-KEY': import.meta.env.VITE_AUTH_TOKEN,
                },
            }).catch((error) => {
                return default_5xx_error;
            });

            return this.authorize(response)
        },
        logout() {
            this.accessToken = null;
            this.refreshToken = null;
            this.expiresIn = null;
            this.profile = null;

            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('profile');

            router.push('/login');
        },
        async refresh_token() {
            const isTokenRefreshing = localStorage.getItem('isTokenRefreshing');
            if (isTokenRefreshing) {
                while (localStorage.getItem('isTokenRefreshing')) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                return;
            }
            localStorage.setItem('isTokenRefreshing', true);
            const response = await api.put('/v1/auth/refresh-token', {
                'refresh_token': this.refreshToken,
            }).catch((error) => {
                return default_5xx_error;
            });
            localStorage.removeItem('isTokenRefreshing');
            return this.authorize(response, false)
        },
    },
});

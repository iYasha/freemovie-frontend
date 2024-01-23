import axiosInstance from "@/services/api";
import {useAuthStore} from "@/stores/auth.js";

const setup = () => {
    const authStore = useAuthStore();
    axiosInstance.interceptors.request.use(
        (config) => {
            if (authStore.accessToken) {
                config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        async (res) => {
            if (res.data.custom_code !== 4017) {
                return res;
            }

            const originalConfig = res.config;

            try {
                originalConfig._retry = true;

                await authStore.refresh_token()

                return axiosInstance(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        },
        async (err) => {
            return Promise.reject(err);
        }
    );
};

export default setup;
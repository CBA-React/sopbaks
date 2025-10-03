import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL =
    'https://qz89k2t8hh.execute-api.us-east-1.amazonaws.com/Prod/api/v1';

let isRefreshing = false;
let failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null): void => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token!);
        }
    });
    failedQueue = [];
};

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as typeof error.config & {
            _retry?: boolean;
        };

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axiosInstance(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem('refreshToken');

            if (!refreshToken) {
                localStorage.clear();
                toast.warning('Session expired. Please log in again.');
                window.location.href = '/sign-in';
                return Promise.reject(error);
            }

            try {
                const { data } = await axios.post(
                    `${API_BASE_URL}/auth/refresh`,
                    { refreshToken },
                );

                const newAccessToken = data.data.accessToken;
                const newRefreshToken = data.data.refreshToken;

                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);

                axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                processQueue(null, newAccessToken);

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                localStorage.clear();
                toast.warning('Authentication failed. Please log in again.');
                window.location.href = '/sign-in';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    },
);

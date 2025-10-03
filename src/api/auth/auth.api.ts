import {
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
} from '@/api/auth/auth.types';
import { axiosInstance } from '@/api/auth/axios-instance';

export const authApi = {
    register: async (data: RegisterRequest): Promise<RegisterResponse> => {
        const response = await axiosInstance.post<RegisterResponse>(
            '/auth/register',
            data,
        );
        return response.data;
    },

    login: async (data: {
        email: string;
        password: string;
    }): Promise<LoginResponse> => {
        try {
            const response = await axiosInstance.post('/auth/sign-in', data);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    },
};

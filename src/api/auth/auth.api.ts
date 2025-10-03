import {
    ChangePasswordRequest,
    ChangePasswordResponse,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    VerifyResetCodeRequest,
    VerifyResetCodeResponse,
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
            const response = await axiosInstance.post('/auth/login', data);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    },
    resetPassword: async (
        data: ResetPasswordRequest,
    ): Promise<ResetPasswordResponse> => {
        const response = await axiosInstance.post<ResetPasswordResponse>(
            '/auth/reset-password',
            data,
        );
        return response.data;
    },
    verifyResetCode: async (
        data: VerifyResetCodeRequest,
    ): Promise<VerifyResetCodeResponse> => {
        const response = await axiosInstance.post<VerifyResetCodeResponse>(
            '/auth/verify-reset-code',
            data,
        );
        return response.data;
    },

    changePassword: async (
        data: ChangePasswordRequest,
    ): Promise<ChangePasswordResponse> => {
        const response = await axiosInstance.post<ChangePasswordResponse>(
            '/auth/change-password',
            data,
        );
        return response.data;
    },
};

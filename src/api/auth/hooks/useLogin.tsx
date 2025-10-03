import { useMutation, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authApi } from '@/api/auth/auth.api';
import { ApiError, LoginRequest, LoginResponse } from '@/api/auth/auth.types';
import { authStorage } from '../authStorage';

export const useLogin = (): UseMutationResult<
    LoginResponse,
    AxiosError<ApiError>,
    LoginRequest
> => {
    const router = useRouter();

    return useMutation<LoginResponse, AxiosError<ApiError>, LoginRequest>({
        mutationFn: authApi.login,
        onSuccess: (data) => {
            authStorage.setTokens(
                data.token.access_token,
                data.token.refresh_token,
            );

            toast.success('Login successful!');
            router.push('/home');
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.detail?.[0]?.msg ||
                error.response?.data?.message ||
                'Login failed. Please check your credentials.';

            toast.error(errorMessage);
        },
    });
};

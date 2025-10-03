import { useMutation, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authApi } from '@/api/auth/auth.api';
import {
    ApiError,
    RegisterRequest,
    RegisterResponse,
} from '@/api/auth/auth.types';
import { authStorage } from '@/api/auth/authStorage';

export const useRegister = (): UseMutationResult<
    RegisterResponse,
    AxiosError<ApiError>,
    RegisterRequest
> => {
    const router = useRouter();

    return useMutation<RegisterResponse, AxiosError<ApiError>, RegisterRequest>(
        {
            mutationFn: authApi.register,
            onSuccess: (data) => {
                authStorage.setTokens(
                    data.token.access_token,
                    data.token.refresh_token,
                );

                toast.success('Registration successful!');

                setTimeout(() => {
                    router.push('/home');
                }, 100);
            },
            onError: (error) => {
                const errorMessage =
                    error.response?.data?.detail?.[0]?.msg ||
                    error.response?.data?.message ||
                    'Registration failed. Please try again.';

                toast.error(errorMessage);
            },
        },
    );
};

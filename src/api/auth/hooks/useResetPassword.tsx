import { useMutation, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authApi } from '@/api/auth/auth.api';
import {
    ApiError,
    ResetPasswordRequest,
    ResetPasswordResponse,
} from '@/api/auth/auth.types';

export const useResetPassword = (): UseMutationResult<
    ResetPasswordResponse,
    AxiosError<ApiError>,
    ResetPasswordRequest
> => {
    const router = useRouter();
    return useMutation<
        ResetPasswordResponse,
        AxiosError<ApiError>,
        ResetPasswordRequest
    >({
        mutationFn: authApi.resetPassword,
        onSuccess: (data, variables) => {
            toast.success(data.message || 'Reset code sent to your email!');
            sessionStorage.setItem('resetEmail', variables.email);

            router.push('/code-confirmation');
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.detail?.[0]?.msg ||
                error.response?.data?.message ||
                'Failed to send reset link. Please try again.';

            toast.error(errorMessage);
        },
    });
};

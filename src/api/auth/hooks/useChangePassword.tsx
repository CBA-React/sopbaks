import { useMutation, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authApi } from '@/api/auth/auth.api';
import type {
    ApiError,
    ChangePasswordRequest,
    ChangePasswordResponse,
} from '@/api/auth/auth.types';

export const useChangePassword = (): UseMutationResult<
    ChangePasswordResponse,
    AxiosError<ApiError>,
    ChangePasswordRequest
> => {
    const router = useRouter();

    return useMutation<
        ChangePasswordResponse,
        AxiosError<ApiError>,
        ChangePasswordRequest
    >({
        mutationFn: authApi.changePassword,
        onSuccess: (data) => {
            toast.success(data.message || 'Password changed successfully!');

            sessionStorage.removeItem('resetEmail');
            sessionStorage.removeItem('resetCode');

            setTimeout(() => {
                router.push('/sign-in');
            }, 1000);
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.detail?.[0]?.msg ||
                error.response?.data?.message ||
                'Failed to change password. Please try again.';

            toast.error(errorMessage);
        },
    });
};

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authApi } from '@/api/auth/auth.api';
import type {
    ApiError,
    VerifyResetCodeRequest,
    VerifyResetCodeResponse,
} from '@/api/auth/auth.types';

export const useVerifyResetCode = (): UseMutationResult<
    VerifyResetCodeResponse,
    AxiosError<ApiError>,
    VerifyResetCodeRequest
> => {
    const router = useRouter();

    return useMutation<
        VerifyResetCodeResponse,
        AxiosError<ApiError>,
        VerifyResetCodeRequest
    >({
        mutationFn: authApi.verifyResetCode,
        onSuccess: (data, variables) => {
            toast.success(data.message || 'Code verified successfully!');

            sessionStorage.setItem('resetCode', variables.code);

            router.push('/new-password');
        },
        onError: (error) => {
            const errorMessage =
                error.response?.data?.detail?.[0]?.msg ||
                error.response?.data?.message ||
                'Invalid or expired code. Please try again.';

            toast.error(errorMessage);
        },
    });
};

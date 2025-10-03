import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { authStorage } from '@/api/auth/authStorage';

interface UseLogoutReturn {
    logout: () => void;
    isPending: boolean;
}

export const useLogout = (): UseLogoutReturn => {
    const router = useRouter();

    const logout = (): void => {
        authStorage.clearTokens();
        toast.success('Logged out successfully');
        router.push('/sign-in');
    };

    return { logout, isPending: false };
};

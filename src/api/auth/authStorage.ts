export const authStorage = {
    setTokens: (accessToken: string, refreshToken: string): void => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        document.cookie = `accessToken=${accessToken}; path=/; max-age=86400; SameSite=Strict`;
        document.cookie = `refreshToken=${refreshToken}; path=/; max-age=2592000; SameSite=Strict`;
    },

    clearTokens: (): void => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        document.cookie =
            'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie =
            'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },

    getAccessToken: (): string | null => {
        return localStorage.getItem('accessToken');
    },

    getRefreshToken: (): string | null => {
        return localStorage.getItem('refreshToken');
    },
};

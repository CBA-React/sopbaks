'use client';

import 'react-toastify/dist/ReactToastify.css';

import { JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
        },
    },
});

export function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

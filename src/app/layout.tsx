import './globals.css';

import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Providers } from '@/providers';

import { AppProvider } from './Provider';

export const metadata: Metadata = {
    title: 'CBA Project setup',
    description: 'Custom setup by CBA',
};

const PoppinsFont = localFont({
    src: [
        {
            path: '../fonts/Poppins-Medium.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-poppins',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactNode | Promise<ReactNode> {
    return (
        <html lang="en" className={PoppinsFont.variable}>
            <body>
                <AppProvider>
                    <Providers>{children}</Providers>
                </AppProvider>
            </body>
        </html>
    );
}

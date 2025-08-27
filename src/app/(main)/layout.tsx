import { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import { headers } from 'next/headers';

import Header from '@/shared/components/Header/Header';
import Sidebar from '@/shared/components/SIdebar/Sidebar';

const grayBgUrls = ['/ads', '/discover'];

export default async function AuthLayout({
    children,
}: {
    children: ReactNode;
}): Promise<JSX.Element> {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    const hasGrayBg = grayBgUrls.includes(pathname);
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main
                    className={clsx('p-2 md:p-4 lg:p-10 flex-1', {
                        'bg-[#FAFAFA]': hasGrayBg,
                    })}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}

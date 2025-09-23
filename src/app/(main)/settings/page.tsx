'use client';

import { JSX, useState } from 'react';

import AccountDetails from '@/shared/components/Settings/AccountDetails';
import Notification from '@/shared/components/Settings/Notification';
import SecurityAndLogin from '@/shared/components/Settings/SecurityAndLogin';

import NotificationIcon from 'public/icons/settings/notification.svg';
import SecurityIcon from 'public/icons/settings/security.svg';
import UserIcon from 'public/icons/settings/user.svg';

type TabType = 'account' | 'security' | 'notifications';

interface TabInfo {
    id: TabType;
    title: string;
    description: string;
    component: JSX.Element;
    icon: JSX.Element;
}

export default function Settings(): JSX.Element {
    const [activeTab, setActiveTab] = useState<TabType>('account');

    const tabs: TabInfo[] = [
        {
            id: 'account',
            title: 'Account Information',
            description:
                'Update your name, email, username, and other profile details to keep your account up to date.',
            component: <AccountDetails />,
            icon: <UserIcon />,
        },
        {
            id: 'security',
            title: 'Security & Login',
            description:
                'Manage your password, view login activity, and enable two-factor authentication for better security.',
            component: <SecurityAndLogin />,
            icon: <SecurityIcon />,
        },
        {
            id: 'notifications',
            title: 'Notifications',
            description:
                'Control which push and email notifications you receive',
            component: <Notification />,
            icon: <NotificationIcon />,
        },
    ];

    const handleTabClick = (tabId: TabType): void => {
        setActiveTab(tabId);
    };

    const activeTabInfo = tabs.find((tab) => tab.id === activeTab);

    return (
        <article className={'w-full px-1 lg:px-6'}>
            <h1 className={'text-[24px] font-semibold'}>Profile Settings</h1>
            <div className={'flex flex-col lg:flex-row'}>
                <div className={'space-y-6 p-3 lg:p-8'}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`
                                p-4 cursor-pointer transition-all group
                                ${
                                    activeTab === tab.id
                                        ? 'border-l-4 border-[#C32033]'
                                        : 'hover:bg-gray-50'
                                }
                            `}
                        >
                            <div className="flex items-center gap-8">
                                <div className="relative flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125 -m-2 p-2"
                                        style={{ backgroundColor: '#FF889633' }}
                                    />
                                    <div className="relative z-10 text-gray-600">
                                        {tab.icon}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">
                                        {tab.title}
                                    </p>
                                    <p className="text-[14px] mt-1 text-gray-600">
                                        {tab.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'w-full p-3 lg:p-8'}>
                    {activeTabInfo?.component}
                </div>
            </div>
        </article>
    );
}

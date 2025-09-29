'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { FaqIcon } from '@/shared/components/SIdebar/SidebarIcons/SidebarIcons';
import Button from '../Button/Button';
import { Search } from '../Search/Search';

import AdsIcon from 'public/icons/ads.svg';
import ArrowCircleDownIcon from 'public/icons/arrow-circle-down.svg';
import HomeIcon from 'public/icons/home.svg';
import LogoutIcon from 'public/icons/logout.svg';
import SearchOnPhoneIcon from 'public/icons/search-on-phone.svg';
import StreamIcon from 'public/icons/stream.svg';
import UserIcon from 'public/icons/user.svg';

interface BurgerProps {
    burgerActive: boolean;
    closeBurgerMenu: () => void;
}

const FEEDS = [
    { label: 'Home', icon: HomeIcon, path: '/home' },
    { label: 'Discover', icon: SearchOnPhoneIcon, path: '/discover' },
    { label: 'Ads', icon: AdsIcon, path: '/ads' },
    { label: 'Following', icon: UserIcon, path: '/following' },
];
const USERS = [
    {
        id: 1,
        name: 'Joe Dohn',
        avatar: '/pictures/mockImages/avatar.png',
        online: true,
    },
    {
        id: 2,
        name: 'Emma Watson',
        avatar: '/pictures/mockImages/avatar.png',
        online: true,
    },
    {
        id: 3,
        name: 'Michael Scott',
        avatar: '/pictures/mockImages/avatar.png',
        online: false,
    },
    {
        id: 4,
        name: 'Sophia Lee',
        avatar: '/pictures/mockImages/avatar.png',
        online: true,
    },
];

export const MenuOpen: React.FC<BurgerProps> = ({
    burgerActive,
    closeBurgerMenu,
}: BurgerProps) => {
    const pathname = usePathname();

    return (
        <nav
            className={clsx(
                'bg-white fixed top-0 left-0 z-1000 h-dvh w-full flex-col justify-between pt-[100px] p-4 transition-transform duration-300',
                burgerActive ? 'translate-x-0' : '-translate-x-full',
            )}
        >
            <div className="px-4 flex gap-5 items-center">
                <Image
                    src="/pictures/mockImages/avatar.png"
                    alt="Avatar"
                    width={60}
                    height={60}
                    className="rounded-full cursor-pointer size-[60px]"
                />
                <div className="flex gap-1 flex-col justify-between">
                    <p className="text-xl font-semibold">John Doe</p>
                    <button className="cursor-pointer flex items-center gap-2">
                        <LogoutIcon />
                        <p className="text-[#979797]">Logout</p>
                    </button>
                </div>
            </div>
            <Search className="my-8" />

            <div className="overflow-y-auto h-[calc(100dvh-340px)]">
                <div className="flex flex-col border-b border-b-[#d6d6d6] pb-4">
                    <p className="text-sm font-semibold mb-[17px]">New feeds</p>
                    <ul className="flex gap-3 text-[#868686] flex-col">
                        {FEEDS.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = pathname === item.path;

                            return (
                                <li key={item.label}>
                                    <Link href={item.path}>
                                        <button
                                            onClick={closeBurgerMenu}
                                            className={`flex w-full items-center relative gap-5 px-4 py-[11px] cursor-pointer text-sm font-medium ${
                                                isActive
                                                    ? 'text-[#c32033]'
                                                    : 'text-[#868686]'
                                            }`}
                                        >
                                            {isActive && (
                                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 bg-[#c32033] h-8 rounded-r-[32px]" />
                                            )}
                                            <IconComponent
                                                color={
                                                    isActive
                                                        ? '#c32033'
                                                        : '#868686'
                                                }
                                                className=""
                                            />
                                            <p>{item.label}</p>
                                        </button>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col border-b border-b-[#d6d6d6] pb-4 my-5">
                    <p className="text-sm font-semibold mb-[17px]">
                        Recommended Channels
                    </p>
                    <ul className="flex gap-5 text-[#868686] flex-col">
                        {USERS.map((user) => (
                            <li
                                key={user.id}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2.5">
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        width={35}
                                        height={35}
                                        className="rounded-full cursor-pointer size-[35px]"
                                    />
                                    <p className="text-[#868686] text-sm font-medium">
                                        {user.name}
                                    </p>
                                </div>
                                {user.online && (
                                    <div className="size-[7px] rounded-full bg-[#54a93f]" />
                                )}
                            </li>
                        ))}
                        <li className="flex items-center gap-4 cursor-pointer">
                            <ArrowCircleDownIcon />
                            <p className="text-[#868686] text-sm font-medium">
                                Load more
                            </p>
                        </li>
                    </ul>
                </div>
                <Link href="/faq">
                    <div
                        onClick={closeBurgerMenu}
                        className={`flex items-center gap-4 cursor-pointer pl-4 py-[11px] relative ${
                            pathname === '/faq'
                                ? 'text-[#c32033]'
                                : 'text-[#868686]'
                        }`}
                    >
                        {pathname === '/faq' && (
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 bg-[#c32033] h-8 rounded-r-[32px]" />
                        )}
                        <FaqIcon
                            color={pathname === '/faq' ? '#c32033' : '#868686'}
                        />
                        <p className="text-sm font-medium">Help&FAQ</p>
                    </div>
                </Link>
            </div>
            <div className="absolute bottom-0 left-4 bg-white w-[calc(100%-32px)] py-4">
                <Button
                    text="Start Streaming"
                    className="w-full justify-center h-11"
                    onClick={closeBurgerMenu}
                    icon={<StreamIcon />}
                />
            </div>
        </nav>
    );
};

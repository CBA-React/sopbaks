'use client';

import { JSX, useRef, useState } from 'react';
import Image from 'next/image';

import NotificationIcon from '@/shared/components/NotificationIcon/NotificationIIcon';
import { Burger } from '../Burger/Burger';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuOpen } from '../MenuOpen/MenuOpen';
import { Search } from '../Search/Search';

import LogoMobileIcon from 'public/icons/logoMobile.svg';
import SearchOnPhoneIcon from 'public/icons/search-on-phone.svg';

const menu = [
    { label: 'All', href: '/all' },
    { label: 'Social', href: '/social' },
    { label: 'Business', href: '/business' },
    { label: 'Streaming', href: '/streaming' },
];

export default function Header(): JSX.Element {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    const avatarRef = useRef<HTMLDivElement>(null);

    const clickBurger = (): void => {
        setBurgerActive((prev) => !prev);
        document.body.classList.toggle('overflow-hidden');
    };

    return (
        <>
            <header className="sticky top-0 z-1001 flex flex-row justify-between h-[97px] max-[1120px]:h-fit max-[1120px]:p-4 min-[1120px]:border-b-[1px] border-b-[#CCCCCC] items-center pl-12 pr-10 bg-[#FAFAFA]">
                {/* Меню */}
                <ul className="flex gap-6 max-[1120px]:hidden">
                    {menu.map((item) => (
                        <MenuItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                        />
                    ))}
                </ul>

                <div className="w-full flex justify-between min-[1120px]:justify-end">
                    <LogoMobileIcon className="min-[1120px]:hidden " />

                    {/* Поиск + нотификейшн + аватарка */}
                    <div className="flex flex-row items-center gap-3 lg:gap-[18px]">
                        {/* Поиск */}
                        <Search className="w-[300px] max-[1120px]:hidden" />

                        {/* Уведомления */}
                        <NotificationIcon hasNotifications={true} />

                        <SearchOnPhoneIcon
                            className="hidden max-[1120px]:block cursor-pointer hover:text-[#C32033]"
                            onClick={clickBurger}
                        />

                        <div className="bg-[#d9d9d9] w-[1px] h-6"></div>

                        <Burger
                            burgerActive={burgerActive}
                            closeBurgerMenu={clickBurger}
                        />

                        {/* Аватарка */}
                        <div
                            ref={avatarRef}
                            className="relative max-[1120px]:hidden"
                        >
                            <button
                                onClick={() => setIsAvatarOpen(!isAvatarOpen)}
                            >
                                <Image
                                    src="/pictures/mockImages/avatar.png"
                                    alt="Avatar"
                                    width={45}
                                    height={45}
                                    className="rounded-full cursor-pointer"
                                />
                            </button>

                            {isAvatarOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-3 z-10">
                                    <p className="text-sm cursor-pointer hover:bg-gray-100 rounded px-2 py-1">
                                        Profile
                                    </p>
                                    <p className="text-sm cursor-pointer hover:bg-gray-100 rounded px-2 py-1">
                                        Settings
                                    </p>
                                    <p className="text-sm cursor-pointer hover:bg-gray-100 rounded px-2 py-1">
                                        Logout
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {/* Меню Mobile*/}
            <ul className="flex gap-6 p-4 min-[1120px]:hidden pb-0">
                {menu.map((item) => (
                    <MenuItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                    />
                ))}
            </ul>
            <MenuOpen
                burgerActive={burgerActive}
                closeBurgerMenu={clickBurger}
            />
        </>
    );
}

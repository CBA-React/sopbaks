'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import NotificationIcon from '@/shared/components/NotificationIcon/NotificationIIcon';
import SearchIcon from 'public/icons/search.svg';
import SettingsIcon from 'public/icons/settings.svg';

const menu = [
    { label: 'All', href: '/all' },
    { label: 'Social', href: '/social' },
    { label: 'Business', href: '/business' },
    { label: 'Streaming', href: '/streaming' },
];

export default function Header(): JSX.Element {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const pathname = usePathname();

    const popupRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    // Закрытие попапа настроек по клику вне
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsPopupOpen(false);
            }
            if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
                setIsAvatarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="flex flex-row justify-between h-[97px] border-b-[1px] border-b-[#CCCCCC] items-center pl-12 pr-10 bg-[#FAFAFA]">
            {/* Меню */}
            <ul className="flex gap-6">
                {menu.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.href} className="relative pb-1">
                            <Link
                                href={item.href}
                                className={`
                                    relative
                                    after:absolute
                                    after:left-0
                                    after:-bottom-[9px]
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-[#C32033]
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full
                                    ${isActive ? 'text-[#C32033]' : 'text-black'}
                                `}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Поиск + нотификейшн + аватарка */}
            <div className="flex flex-row items-center gap-[18px]">
                {/* Поиск */}
                <div className="relative w-[300px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                        <SettingsIcon
                            className="w-6 h-6 text-gray-400"
                            onClick={() => setIsPopupOpen(!isPopupOpen)}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Search the post, people ..."
                        className="w-full border border-[#CCCCCC] rounded-[14px] px-10 py-2 focus:outline-none placeholder:text-[#666666]"
                    />

                    {isPopupOpen && (
                        <div
                            ref={popupRef}
                            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-3 z-10"
                        >
                            <p className="text-sm">Настройки поиска</p>
                            <p className="text-sm">Фильтры</p>
                            <p className="text-sm">Дополнительно</p>
                        </div>
                    )}
                </div>

                {/* Уведомления */}
                <NotificationIcon hasNotifications={true} />

                {/* Аватарка */}
                <div ref={avatarRef} className="relative">
                    <button onClick={() => setIsAvatarOpen(!isAvatarOpen)}>
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
        </header>
    );
}

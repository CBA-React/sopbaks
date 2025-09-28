'use client';

import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/shared/components/Button/Button';
import Divider from '@/shared/components/Divider/Divider';
import RecommendedChanelItem from '@/shared/components/RecommendedChanelItem/RecommendedChanelItem';
import {
    AdsIcon,
    FaqIcon,
    FollowingIcon,
    HomeIcon,
    SearchIcon,
} from '@/shared/components/SIdebar/SidebarIcons/SidebarIcons';

import LoadMoreIcon from 'public/icons/load-more.svg';
import Logo from 'public/icons/logo.svg';
import StreamIcon from 'public/icons/stream.svg';

const recommendedChannels = [
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Joe Dohn',
        status: 'offline',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Guy Hawkins',
        status: 'online',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Laurel Klaus',
        status: 'offline',
    },
    {
        img: '/pictures/mockImages/avatar.png',
        name: 'Violet Sirus',
        status: 'online',
    },
];

export default function Sidebar(): JSX.Element {
    const pathname = usePathname();

    const getItemClasses = (path: string): string => {
        const isActive = pathname === path;
        return `flex items-center gap-3 p-3 relative ${
            isActive
                ? 'text-[#C32033] before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#C32033] before:rounded-r-sm'
                : 'text-[#868686]'
        }`;
    };

    const getIconColor = (path: string): string => {
        return pathname === path ? '#C32033' : '#868686';
    };

    return (
        <aside className="max-[1120px]:hidden w-[265px] bg-gray-100 border-r border-gray-300">
            <nav className="p-5">
                <Logo className="w-[150px] h-auto mt-2" />
                <Button
                    text={'Start Streaming'}
                    icon={<StreamIcon />}
                    className={'w-full my-[32px]'}
                />
                <p className={'text-[14px] font-semibold mb-3'}>New feeds</p>
                <ul>
                    <Link href={'/home'}>
                        <li className={getItemClasses('/home')}>
                            <HomeIcon color={getIconColor('/home')} />
                            Home
                        </li>
                    </Link>
                    <Link href={'/discover'}>
                        <li className={getItemClasses('/discover')}>
                            <SearchIcon color={getIconColor('/discover')} />
                            Discover
                        </li>
                    </Link>
                    <Link href={'/ads'}>
                        <li className={getItemClasses('/ads')}>
                            <AdsIcon color={getIconColor('/ads')} />
                            Ads
                        </li>
                    </Link>
                    <Link href={'/following'}>
                        <li className={getItemClasses('/following')}>
                            <FollowingIcon color={getIconColor('/following')} />
                            Following
                        </li>
                    </Link>
                </ul>
                <Divider className={'mt-5'} />
                <p className={'text-[14px] font-semibold mt-[32px]'}>
                    Recommended Channels
                </p>
                <ul className={'mt-4 space-y-5'}>
                    {recommendedChannels.map((channel) => (
                        <li key={channel.name}>
                            <RecommendedChanelItem
                                avatar={channel.img}
                                name={channel.name}
                                status={channel.status}
                            />
                        </li>
                    ))}
                    <li
                        className={
                            'flex flex-row gap-4 cursor-pointer items-center'
                        }
                    >
                        <LoadMoreIcon />
                        <span className={'text-[#00000066]'}>Load more</span>
                    </li>
                </ul>
                <Divider className={'mt-5'} />
                <ul className={'mt-4'}>
                    <Link href={'/faq'}>
                        <li className={getItemClasses('/faq')}>
                            <FaqIcon color={getIconColor('/faq')} />
                            Help & FAQ
                        </li>
                    </Link>
                </ul>
            </nav>
        </aside>
    );
}

'use client';
import { JSX, useState } from 'react';

import BlogItem from '@/shared/components/BlogItem/BlogItem';
import StreamItem from '@/shared/components/StreamItem/StreamItem';

const contentFromAPI = [
    {
        id: '1',
        type: 'stream',
        tabId: 'music',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '2',
        type: 'blog',
        tabId: 'music',
        data: {
            postImage: '/pictures/mockImages/realEstate.png',
            tags: ['Italian', 'Food', 'Pasta'],
            postTitle: 'I will make Italian Pasta',
            authorName: 'Joe Dohn',
            postedTime: '2d',
            authorAvatar: '/pictures/mockImages/avatar.png',
            viewsCount: '15k',
        },
    },
    {
        id: '3',
        type: 'stream',
        tabId: 'music',
        data: {
            postTitle: 'Real Estate',
            postImage: '/pictures/mockImages/realEstate.png',
            authorTitle: 'Capital Funding Group',
            authorName: 'Guy Hawkins',
            authorAvatar: '/pictures/mockImages/avatar.png',
        },
    },
    {
        id: '4',
        type: 'blog',
        tabId: 'music',
        data: {
            postImage: '/pictures/mockImages/realEstate.png',
            tags: ['Italian', 'Food', 'Pasta'],
            postTitle: 'I will make Italian Pasta',
            authorName: 'Joe Dohn',
            postedTime: '2d',
            authorAvatar: '/pictures/mockImages/avatar.png',
            viewsCount: '15k',
        },
    },
];

export default function DiscoverPageTabs(): JSX.Element {
    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'technology', label: 'Technology' },
        { id: 'music', label: 'Music' },
        { id: 'cooking', label: 'Cooking' },
        { id: 'art', label: 'Art' },
        { id: 'travel', label: 'Travel' },
        { id: 'fitness', label: 'Fitness' },
        { id: 'education', label: 'Education' },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    const activeContent = contentFromAPI.filter(
        (item) => item.tabId === activeTab,
    );

    return (
        <article className={'w-full mx-auto px-4'}>
            <div className="flex mt-5 overflow-x-auto lg:overflow-x-visible scrollbar-hide hover:scrollbar-show scroll-smooth relative z-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 font-semibold cursor-pointer whitespace-nowrap flex-shrink-0 lg:flex-shrink ${
                            activeTab === tab.id
                                ? 'text-[#C32033]'
                                : 'text-[#868686]'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-row flex-wrap gap-4 mt-6 justify-items-center">
                {activeContent.map((item) => {
                    if (item.type === 'stream') {
                        return (
                            <StreamItem
                                {...item.data}
                                key={item.id}
                                isVerified={true}
                                className={'!max-w-[354px]'}
                            />
                        );
                    } else if (item.type === 'blog') {
                        return (
                            <BlogItem
                                {...item.data}
                                key={item.id}
                                className={'!max-w-[354px]'}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </article>
    );
}

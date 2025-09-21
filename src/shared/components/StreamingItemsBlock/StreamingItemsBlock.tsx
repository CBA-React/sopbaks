'use client';

import { useState } from 'react';

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
];

export default function StreamingItemsBlock(): JSX.Element {
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
        <section className={'w-full mx-auto px-4'}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                {activeContent.map((item) => (
                    <StreamItem
                        {...item.data}
                        key={item.id}
                        isVerified={true}
                    />
                ))}
            </div>
        </section>
    );
}

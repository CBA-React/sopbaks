'use client';

import { JSX, useState } from 'react';

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
];

export default function Streaming(): JSX.Element {
    const [sortBy, setSortBy] = useState('popular');
    return (
        <section className={'mt-10 font-semibold'}>
            <div className="flex items-center justify-between mb-3">
                <p className={'text-[24px]'}>Streaming</p>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 text-[#868686] rounded-md text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="popular">Popular</option>
                    <option value="trending">Trending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-3">
                {contentFromAPI.map((item) => (
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

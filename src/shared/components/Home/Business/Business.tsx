'use client';

import { JSX, useState } from 'react';

import BlogItem from '@/shared/components/BlogItem/BlogItem';

const data = [
    {
        id: '1',
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

export default function Business(): JSX.Element {
    const [sortBy, setSortBy] = useState('popular');
    return (
        <section className={'mt-10'}>
            <div className="flex items-center justify-between mb-3">
                <p className={'text-[24px] font-semibold'}>Business</p>
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
                {data.map((item) => (
                    <BlogItem {...item.data} key={item.id} />
                ))}
            </div>
        </section>
    );
}

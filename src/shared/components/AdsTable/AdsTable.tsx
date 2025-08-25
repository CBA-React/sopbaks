'use client';

import { JSX } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';
import GraphIcon from '@/shared/components/GraphIcon/GraphIcon';
import { formatNumber } from '@/utils/formatNumber';

const data = [
    {
        id: 1,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'Italian Pasta',
        },
        status: 'Active',
        likes: 3807,
        impressions: { value: 3807, trend: 'up' as 'up' | 'down' },
        comments: 24,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'Walking',
        },
        status: 'Active',
        likes: 1675,
        impressions: { value: 1675, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'React',
        },
        status: 'Active',
        likes: 2876,
        impressions: { value: 2876, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'Dance',
        },
        status: 'Active',
        likes: 3854,
        impressions: { value: 3854, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'Play Game',
        },
        status: 'Active',
        likes: 1642,
        impressions: { value: 1642, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'English',
        },
        status: 'Active',
        likes: 1654,
        impressions: { value: 1654, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
    {
        id: 2,
        post: {
            img: '/pictures/mockImages/ad-table-image.png',
            text: 'English',
        },
        status: 'Active',
        likes: 3732,
        impressions: { value: 3732, trend: 'down' as 'up' | 'down' },
        comments: 3,
    },
];

export default function AdsTable(): JSX.Element {
    return (
        <div className="overflow-x-auto mt-10">
            <h2 className={'text-[24px] font-semibold'}>Ads</h2>
            <div className="overflow-x-auto mt-5 p-10 bg-white rounded-[10px]">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr>
                            <th className="py-3 pl-19 text-[#5D5F63] text-[14px] w-[150px]">
                                Post
                            </th>
                            <th className="py-3 px-4 text-[#5D5F63] text-[14px] w-[150px]">
                                Status
                            </th>
                            <th className="py-3 px-4 text-[#5D5F63] text-[14px] w-[150px]">
                                Likes
                            </th>
                            <th className="py-3 px-4 text-[#5D5F63] text-[14px] w-[150px]">
                                Impressions
                            </th>
                            <th className="py-3 px-4 text-[#5D5F63] text-[14px] w-[100px]">
                                Comments
                            </th>
                            <th className="py-3 px-4 text-[#5D5F63] text-[14px] w-[200px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td className="py-3 px-4 flex items-center gap-3">
                                    <Image
                                        src={row.post.img}
                                        alt="Post"
                                        width={48}
                                        height={40}
                                        className="rounded-md"
                                    />
                                    <span className="text-sm text-gray-800">
                                        {row.post.text}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-[#5D5F63]">
                                    {row.status}
                                </td>
                                <td className="py-3 px-4 text-[#5D5F63]">
                                    {formatNumber(row.likes)}
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-3 items-center text-[#5D5F63]">
                                        <span>
                                            {formatNumber(
                                                row.impressions.value,
                                            )}
                                        </span>
                                        {row.impressions.trend === 'up' ? (
                                            <GraphIcon color="green" />
                                        ) : (
                                            <GraphIcon rotate={50} />
                                        )}
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-[#5D5F63]">
                                    {formatNumber(row.comments)}
                                </td>
                                <td className="py-3 px-4">
                                    <Button
                                        className="rounded-[10px] bg-[#C32033] text-white px-4 py-1"
                                        text="BOOST"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

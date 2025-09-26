'use client';

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';
import GraphIcon from '@/shared/components/GraphIcon/GraphIcon';
import { categories } from '@/shared/constants/categories';
import { formatNumber } from '@/utils/formatNumber';

import ClaimIcon from 'public/icons/adsTableCategoryIcons/claim.svg';

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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('[data-dropdown-container]')) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleCategorySelect = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setIsDropdownOpen(false);
    };

    const getSelectedCategoryName = () => {
        return (
            categories.find((cat) => cat.id === selectedCategory)?.name || 'All'
        );
    };

    return (
        <div className="overflow-x-auto mt-10">
            <div className={'flex flex-row justify-between items-center'}>
                <h2 className={'text-[24px] font-semibold'}>Ads</h2>
                <div className="relative" data-dropdown-container>
                    <p className="flex items-center gap-2 text-[#5D5F63]">
                        Category:
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-1 hover:text-[#C32033] transition-colors"
                        >
                            <span className={'text-black'}>
                                {getSelectedCategoryName()}
                            </span>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            >
                                <path
                                    d="M3 4.5L6 7.5L9 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </p>

                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 top-full mt-2 rounded-lg shadow-lg z-10 w-[300px] lg:w-[600px] max-h-[440px] overflow-y-auto"
                            style={{ background: '#F5F5F5F7' }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {categories.map((category) => (
                                    <div key={category.id} className="relative">
                                        <button
                                            onClick={() =>
                                                handleCategorySelect(
                                                    category.id,
                                                )
                                            }
                                            onMouseEnter={() =>
                                                setHoveredCategory(category.id)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredCategory(null)
                                            }
                                            className={`cursor-pointer flex gap-3 w-full text-left px-4 py-3 hover:bg-white/50 transition-colors ${
                                                selectedCategory === category.id
                                                    ? 'text-black font-medium'
                                                    : 'text-[#5D5F63]'
                                            }`}
                                        >
                                            {category.icon} {category.name}
                                        </button>

                                        {hoveredCategory === category.id &&
                                            category.tooltip && (
                                                <div className="flex gap-2 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#C5C5C5] text-white text-sm px-3 py-2 rounded-lg shadow-lg z-50 whitespace-normal max-w-[280px]">
                                                    <span className="flex-shrink-0">
                                                        <ClaimIcon />
                                                    </span>
                                                    {category.tooltip}
                                                </div>
                                            )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
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
                                <td className="py-3 lg:px-4 flex items-center gap-3">
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

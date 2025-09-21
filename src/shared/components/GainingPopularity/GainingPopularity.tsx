import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LikesIcon from 'public/icons/heart.svg';
import StreamIcon from 'public/icons/stream.svg';

interface StreamingItem {
    id: number;
    title: string;
    author: string;
    likes: string;
    watching: string;
    thumbnail: string;
}

const streamingData: StreamingItem[] = [
    {
        id: 1,
        title: 'Creating a Podcast Setup from Scratch',
        author: 'Guy Hawkins',
        likes: '1.345',
        watching: '4.2K watching',
        thumbnail:
            '/pictures/mockImages/gainingPopularity/gainingPopularity1.jpg',
    },
    {
        id: 2,
        title: 'Live Coding a Game with Unity and C#',
        author: 'Guy Hawkins',
        likes: '1.345',
        watching: '4.2K watching',
        thumbnail:
            '/pictures/mockImages/gainingPopularity/gainingPopularity2.jpg',
    },
    {
        id: 3,
        title: 'Baking the Perfect Chocolate Cake',
        author: 'Guy Hawkins',
        likes: '1.345',
        watching: '4.2K watching',
        thumbnail:
            '/pictures/mockImages/gainingPopularity/gainingPopularity3.jpg',
    },
];

export default function GainingPopularity(): JSX.Element {
    return (
        <section className={'mt-10'}>
            <p className={'text-[24px] font-semibold mb-4'}>
                Gaining popularity
            </p>
            <div>
                <div
                    className="bg-white rounded-lg overflow-x-auto max-w-[1100px]"
                    style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
                >
                    {streamingData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex items-center px-6 py-4 ${index !== streamingData.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <div className="w-16 text-lg font-semibold text-gray-600 mr-4 flex-shrink-0">
                                {item.id}
                            </div>

                            <div className="w-16 h-12 relative rounded-lg overflow-hidden mr-4 flex-shrink-0">
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-70 mr-6 flex-shrink-0">
                                <h3 className="text-lg font-medium text-gray-900 truncate">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="w-42 mr-6 flex-shrink-0">
                                <p className="text-gray-600 truncate">
                                    {item.author}
                                </p>
                            </div>

                            <div className="w-32 flex items-center mr-6 flex-shrink-0">
                                <span className="text-gray-600 flex gap-2">
                                    <LikesIcon /> {item.likes}
                                </span>
                            </div>

                            <div className="w-32 flex items-center mr-6 flex-shrink-0">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                <span className="text-gray-600 text-sm whitespace-nowrap">
                                    {item.watching}
                                </span>
                            </div>

                            <Link href={'#'}>
                                <div
                                    className={
                                        'bg-[#C32033] h-[44px] w-[42px] flex items-center justify-center rounded-[40px]'
                                    }
                                >
                                    <StreamIcon />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CreateNewPostModal from '@/shared/components/CreatePostModal/CreatePostModal';

export default function DiscoverBanner(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-full h-[300px] relative rounded-2xl overflow-hidden">
            <Image
                src="/pictures/discover-banner.jpg"
                alt="banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#C32033] to-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center p-10">
                <h1 className="text-white text-3xl font-bold">
                    Connect, Create, and Go Live with the World
                </h1>
                <p className="text-white max-w-[536px]">
                    Discover trending creators, stream content, grow your
                    network, and boost your brand — all in one platform.
                </p>
                <div className={'mt-6 flex gap-3'}>
                    <Link href={'#'}>
                        <button
                            className={
                                'px-[30px] py-[12px] bg-white text-[#C32033] font-bold rounded-[12px] cursor-pointer'
                            }
                        >
                            Go Live
                        </button>
                    </Link>
                    <Link href={'#'}>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className={
                                'px-[30px] py-[12px] bg-transparent text-white border-[1px] border-white rounded-[12px] cursor-pointer'
                            }
                        >
                            Create Post
                        </button>
                    </Link>
                </div>
            </div>
            <CreateNewPostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

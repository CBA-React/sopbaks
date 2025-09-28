'use client';

import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/shared/components/Button/Button';

import MarkIcon from 'public/icons/mark.svg';
import StreamIcon from 'public/icons/stream.svg';
import VerifiedIcon from 'public/icons/verified.svg';

interface StreamItemProps {
    postImage: string;
    postTitle: string;
    authorAvatar: string;
    authorTitle?: string;
    authorName: string;
    isVerified?: boolean;
}

export default function StreamItem({
    postImage,
    postTitle,
    authorAvatar,
    authorTitle,
    authorName,
    isVerified,
}: StreamItemProps): JSX.Element {
    return (
        <div
            className="w-full max-w-[354px] bg-white rounded-[14px]"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            <div className="w-full h-[236px] relative">
                <Image
                    src={postImage}
                    alt={postTitle}
                    fill
                    className="object-cover rounded-tr-[12px] rounded-tl-[12px]"
                />
            </div>

            <div className="w-full p-5">
                <h2 className="text-[20px] font-bold mb-4">{postTitle}</h2>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={authorAvatar}
                            alt={authorName}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm font-semibold inline-flex items-center gap-3">
                            {authorTitle}
                            {isVerified && <VerifiedIcon />}
                        </span>
                        <span className="text-gray-500 text-sm truncate">
                            {authorName}
                        </span>
                    </div>
                </div>
                <div className={'w-full flex flex-row justify-between mt-5'}>
                    <Link href={'#'}>
                        <Button
                            text={'Live'}
                            icon={<StreamIcon />}
                            className={'font-bold'}
                        />
                    </Link>
                    <div
                        className={
                            'flex flex-row items-center gap-1 text-[#00000094]'
                        }
                    >
                        <MarkIcon />
                        <p className="text-sm">4.2K watching</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

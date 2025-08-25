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
    authorTitle: string;
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
            className="w-[354px] bg-white rounded-[14px]"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            {/* Верхняя картинка */}
            <div className="w-full h-[236px] relative">
                <Image
                    src={postImage}
                    alt={postTitle}
                    fill
                    className="object-contain rounded-tr-[12px] rounded-tl-[12px]"
                />
            </div>

            {/* Заголовок поста */}
            <div className="w-full max-w-[384px] p-5">
                <h2 className="text-[20px] font-bold mb-4">{postTitle}</h2>

                {/* Блок автора */}
                <div className="flex items-center gap-4">
                    {/* Аватар */}
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <Image
                            src={authorAvatar}
                            alt={authorName}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Имя и должность */}
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold inline-flex items-center gap-3">
                            {authorTitle}
                            {isVerified && <VerifiedIcon />}
                        </span>
                        <span className="text-gray-500 text-sm">
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
                        <p>4.2K watching</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import React, { JSX } from 'react';
import Image from 'next/image';

import LiveIcon from 'public/icons/live.svg';
import MarkIcon from 'public/icons/mark.svg';
import VerifiedIcon from 'public/icons/verified.svg';

interface StreamItemProps {
    image: string;
    title: string;
    avatar: string;
    authorTitle: string;
    authorName: string;
    isVerified?: boolean;
}

export default function StreamItem({
    image,
    title,
    avatar,
    authorTitle,
    authorName,
    isVerified,
}: StreamItemProps): JSX.Element {
    return (
        <div
            className="max-w-[354px] bg-white rounded-[14px]"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
            {/* Верхняя картинка */}
            <div className="w-full h-[236px] relative">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Заголовок поста */}
            <div className="w-full max-w-[384px] p-5">
                <h2 className="text-[20px] font-bold mb-4">{title}</h2>

                {/* Блок автора */}
                <div className="flex items-center gap-4">
                    {/* Аватар */}
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <Image
                            src={avatar}
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
                    <LiveIcon className={'cursor-pointer'} />
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

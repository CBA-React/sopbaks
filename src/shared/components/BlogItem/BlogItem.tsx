import React, { JSX } from 'react';
import Image from 'next/image';

interface BlogItemProps {
    postImage: string;
    tags: string[];
    postTitle: string;
    authorAvatar: string;
    postedTime: string;
    authorName: string;
    viewsCount: string;
}

export default function BlogItem({
    postImage,
    tags,
    postTitle,
    authorAvatar,
    postedTime,
    authorName,
    viewsCount,
}: BlogItemProps): JSX.Element {
    return (
        <div
            className="w-[354px] bg-white rounded-[14px]"
            style={{ boxShadow: '0px 4.8px 60px 0px #00000014' }}
        >
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
                {tags &&
                    tags.map((tag: string) => (
                        <span key={tag} className={'text-[#C32033]'}>
                            {' '}
                            #{tag}
                        </span>
                    ))}
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
                            {authorName}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {postedTime}
                        </span>
                    </div>
                </div>
                <p className={'mt-3 text-[#AAAAAA]'}>{viewsCount} views</p>
            </div>
        </div>
    );
}

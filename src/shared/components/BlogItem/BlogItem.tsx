import React, { JSX } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface BlogItemProps {
    postImage: string;
    tags?: string[];
    postTitle: string;
    authorAvatar: string;
    postedTime?: string;
    authorName: string;
    viewsCount?: string;
    className?: string;
}

export default function BlogItem({
    postImage,
    tags,
    postTitle,
    authorAvatar,
    postedTime,
    authorName,
    viewsCount,
    className,
}: BlogItemProps): JSX.Element {
    return (
        <div
            className={clsx('w-full bg-white rounded-[14px]', className)}
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
                <div className="flex flex-wrap gap-1 mb-2">
                    {tags &&
                        tags.map((tag: string) => (
                            <span
                                key={tag}
                                className={'text-[#C32033] text-sm'}
                            >
                                #{tag}
                            </span>
                        ))}
                </div>
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
                        <span className="text-sm font-semibold truncate">
                            {authorName}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {postedTime}
                        </span>
                    </div>
                </div>
                <p className={'mt-3 text-[#AAAAAA] text-sm'}>
                    {viewsCount} views
                </p>
            </div>
        </div>
    );
}

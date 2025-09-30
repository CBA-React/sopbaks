import { JSX } from 'react';
import Image from 'next/image';

import Divider from '@/shared/components/Divider/Divider';
import { formatAmount } from '@/utils/formatNumber';

import CommentIcon from 'public/icons/socialPost/comment.svg';
import DislikeIcon from 'public/icons/socialPost/dislike.svg';
import LikeIcon from 'public/icons/socialPost/like.svg';
import ShareIcon from 'public/icons/socialPost/share.svg';

interface Props {
    authorName: string;
    viewsCount: number;
    updatedAt: string;
    content: string;
    hashTags: string[];
    avatar: string;
    imageContent?: string | string[];
    likes: number;
    dislikes: number;
    commentCount: number;
}

export default function SocialPost({
    authorName,
    viewsCount,
    updatedAt,
    content,
    hashTags,
    avatar,
    imageContent,
    likes,
    dislikes,
    commentCount,
}: Props): JSX.Element {
    const images = imageContent
        ? Array.isArray(imageContent)
            ? imageContent
            : [imageContent]
        : [];
    return (
        <section
            className={' w-full p-5 rounded-[20px]'}
            style={{ boxShadow: '0px 10px 20px 0px #7090B01F' }}
        >
            <div className={'flex flex-row justify-between items-center mb-4'}>
                <div className={'flex flex-row gap-3 items-center'}>
                    <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={avatar}
                            alt={authorName}
                            width={45}
                            height={45}
                        />
                    </div>
                    <div>
                        <p className={'font-semibold'}>{authorName}</p>
                        <p className={'text-[#AAAAAA] text-sm'}>{updatedAt}</p>
                    </div>
                </div>

                <div>
                    <p className={'text-[#AAAAAA] text-sm'}>
                        {formatAmount(viewsCount)} views
                    </p>
                </div>
            </div>

            <div className={imageContent ? 'mb-4' : 'mb-6'}>
                <p className={'mb-2'}>{content}</p>
                <div>
                    {hashTags.map((tag) => (
                        <span key={tag} className={'pr-2 text-[#C32033]'}>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {images.length > 0 && (
                <div className={'mb-6'}>
                    {images.length === 1 ? (
                        <div
                            className={'relative w-full h-[300px] lg:h-[411px]'}
                        >
                            <Image
                                alt={'Post image'}
                                src={images[0]}
                                fill
                                className="object-cover rounded-[20px]"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-2">
                            <div
                                className={
                                    'relative row-span-2 h-[300px] lg:h-[411px]'
                                }
                            >
                                <Image
                                    alt={'Post image 1'}
                                    src={images[0]}
                                    fill
                                    className="object-cover rounded-[20px]"
                                    priority
                                />
                            </div>

                            {images.slice(1, 5).map((img, index) => (
                                <div
                                    key={index}
                                    className={
                                        'relative h-[145px] lg:h-[200px]'
                                    }
                                >
                                    <Image
                                        alt={`Post image ${index + 2}`}
                                        src={img}
                                        fill
                                        className="object-cover rounded-[12px]"
                                    />
                                    {index === 3 && images.length > 5 && (
                                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[12px] flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">
                                                +{images.length - 5}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div
                className={
                    'flex items-center gap-3 text-[#5D5F63] justify-between mb-2'
                }
            >
                <div className={'flex items-center gap-4'}>
                    <div className={'flex gap-2 items-center'}>
                        <LikeIcon className={'cursor-pointer'} />
                        {likes}
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <DislikeIcon className={'cursor-pointer'} />
                        {dislikes}
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <CommentIcon className={'cursor-pointer'} />
                        {commentCount}
                    </div>
                </div>
                <div>
                    <ShareIcon className={'cursor-pointer'} />
                </div>
            </div>

            <p className={'text-[#C32033] mb-4 cursor-pointer'}>
                View {commentCount} comments
            </p>

            <Divider />

            <div className="flex gap-3 items-center mt-4">
                <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={avatar}
                        alt="Your avatar"
                        width={45}
                        height={45}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Write a comment"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:border-[#C32033] transition-colors placeholder-gray-400"
                />
            </div>
        </section>
    );
}

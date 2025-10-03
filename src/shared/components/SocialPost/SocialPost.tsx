'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Image from 'next/image';

import { EmojiIcon, ImageIcon } from '@/shared/components/CreateNewPost/Icons';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [commentText, setCommentText] = useState('');
    const [commentImage, setCommentImage] = useState<File | null>(null);
    const [commentImagePreview, setCommentImagePreview] = useState<
        string | null
    >(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const images = imageContent
        ? Array.isArray(imageContent)
            ? imageContent
            : [imageContent]
        : [];

    const openModal = (index: number): void => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    const nextImage = (): void => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (): void => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + images.length) % images.length,
        );
    };

    const handleImageUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            setCommentImage(file);
            const previewUrl = URL.createObjectURL(file);
            setCommentImagePreview(previewUrl);
        }
    };

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setCommentText((prev) => prev + emojiData.emoji);
    };

    const removeCommentImage = (): void => {
        if (commentImagePreview) {
            URL.revokeObjectURL(commentImagePreview);
        }
        setCommentImage(null);
        setCommentImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmitComment = (): void => {
        if (!commentText.trim() && !commentImage) return;

        console.log('Comment:', commentText);
        console.log('Image:', commentImage);

        setCommentText('');
        if (commentImagePreview) {
            URL.revokeObjectURL(commentImagePreview);
        }
        setCommentImage(null);
        setCommentImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    useEffect(() => {
        return (): void => {
            if (commentImagePreview) {
                URL.revokeObjectURL(commentImagePreview);
            }
        };
    }, [commentImagePreview]);

    return (
        <>
            <section
                className={'w-full p-5 rounded-[20px]'}
                style={{ boxShadow: '0px 10px 20px 0px #7090B01F' }}
            >
                <div
                    className={
                        'flex flex-row justify-between items-center mb-4'
                    }
                >
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
                            <p className={'text-[#AAAAAA] text-sm'}>
                                {updatedAt}
                            </p>
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
                                className={
                                    'relative w-full h-[300px] lg:h-[411px] cursor-pointer'
                                }
                                onClick={() => openModal(0)}
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
                                        'relative row-span-2 h-[300px] lg:h-[411px] cursor-pointer'
                                    }
                                    onClick={() => openModal(0)}
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
                                            'relative h-[145px] lg:h-[200px] cursor-pointer'
                                        }
                                        onClick={() => openModal(index + 1)}
                                    >
                                        <Image
                                            alt={`Post image ${index + 2}`}
                                            src={img}
                                            fill
                                            className="object-cover rounded-[12px]"
                                        />
                                        {index === 3 && images.length > 5 && (
                                            <div className="absolute inset-0 backdrop-blur-sm bg-opacity-60 rounded-[12px] flex items-center justify-center">
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

                <div className="mt-4 space-y-3">
                    <div className="flex gap-3 items-start">
                        <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={avatar}
                                alt="Your avatar"
                                width={45}
                                height={45}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={commentText}
                                    onChange={(e) =>
                                        setCommentText(e.target.value)
                                    }
                                    placeholder="Write a comment"
                                    className="w-full px-4 py-2 pr-28 border border-gray-300 rounded-full outline-none focus:border-[#C32033] transition-colors placeholder-gray-400"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowEmojiPicker(!showEmojiPicker)
                                        }
                                        className="text-gray-500 hover:text-gray-700 p-1"
                                    >
                                        <EmojiIcon />
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                        className="text-gray-500 hover:text-gray-700 p-1"
                                    >
                                        <ImageIcon />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmitComment}
                                        disabled={
                                            !commentText.trim() && !commentImage
                                        }
                                        className="ml-1 px-3 py-1 bg-[#C32033] text-white text-sm rounded-full hover:bg-[#A01A2A] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>

                            {showEmojiPicker && (
                                <div className="absolute z-10 mt-2">
                                    <EmojiPicker
                                        onEmojiClick={handleEmojiClick}
                                        width={300}
                                        height={400}
                                        previewConfig={{
                                            showPreview: false,
                                        }}
                                        skinTonesDisabled
                                    />
                                </div>
                            )}

                            {commentImage && commentImagePreview && (
                                <div className="mt-3 relative inline-block">
                                    <img
                                        src={commentImagePreview}
                                        alt="Comment preview"
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={removeCommentImage}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[5000] backdrop-blur-sm bg-opacity-50 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 text-black text-4xl font-bold hover:text-gray-800 z-10"
                        onClick={closeModal}
                    >
                        ×
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 text-black text-4xl font-bold hover:text-gray-800 z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                ‹
                            </button>
                            <button
                                className="absolute right-4 text-black text-4xl font-bold hover:text-gray-800 z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                ›
                            </button>
                        </>
                    )}

                    <div
                        className="relative max-w-7xl max-h-[50vh] w-full h-full flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-sm">
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

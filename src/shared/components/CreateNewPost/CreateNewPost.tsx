'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Image from 'next/image';

import {
    ArrowDownIcon,
    EmojiIcon,
    HashtagIcon,
    ImageIcon,
} from '@/shared/components/CreateNewPost/Icons';
import CreateNewPostModal from '@/shared/components/CreatePostModal/CreatePostModal';

const visibilityOptions = [
    { value: 'everyone', label: 'Everyone' },
    { value: 'followers', label: 'Followers' },
    { value: 'private', label: 'Only Me' },
];

const popularTags = [
    'technology',
    'business',
    'lifestyle',
    'fitness',
    'food',
    'travel',
    'photography',
    'music',
];

export default function CreateNewPost(): JSX.Element {
    const [postContent, setPostContent] = useState('');
    const [visibility, setVisibility] = useState('Everyone');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const [isHashtagOpen, setIsHashtagOpen] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const emojiRef = useRef<HTMLDivElement>(null);
    const hashtagRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
            if (
                emojiRef.current &&
                !emojiRef.current.contains(event.target as Node)
            ) {
                setIsEmojiOpen(false);
            }
            if (
                hashtagRef.current &&
                !hashtagRef.current.contains(event.target as Node)
            ) {
                setIsHashtagOpen(false);
            }
        };

        if (isDropdownOpen || isEmojiOpen || isHashtagOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return (): void => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, isEmojiOpen, isHashtagOpen]);

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setPostContent(postContent + emojiData.emoji);
        setIsEmojiOpen(false);
    };

    const handleHashtagClick = (tag: string) => {
        setPostContent(
            postContent + (postContent ? ' ' : '') + '#' + tag + ' ',
        );
        setIsHashtagOpen(false);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages: string[] = [];
            Array.from(files).forEach((file) => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        newImages.push(reader.result as string);
                        if (newImages.length === files.length) {
                            setUploadedImages([
                                ...uploadedImages,
                                ...newImages,
                            ]);
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    };

    const removeImage = (index: number) => {
        setUploadedImages(uploadedImages.filter((_, i) => i !== index));
    };

    return (
        <section className={'mb-4'}>
            <p className={'text-[24px] font-semibold mb-4'}>Post something</p>
            <div
                onClick={() => setIsModalOpen(true)}
                className="bg-white rounded-[20px] p-6"
                style={{ boxShadow: '0px 4px 50px 0px #0000000F' }}
            >
                <div className="flex gap-4 items-start mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src="/pictures/mockImages/avatar.png"
                            alt="User avatar"
                            width={48}
                            height={48}
                            className="object-cover"
                        />
                    </div>
                    <p className={'text-gray-500'}>Type something</p>
                    {/*<textarea*/}
                    {/*    value={postContent}*/}
                    {/*    onChange={(e) => setPostContent(e.target.value)}*/}
                    {/*    placeholder="Type something"*/}
                    {/*    className="flex-1 outline-none resize-none text-gray-500 placeholder-gray-400 min-h-[60px]"*/}
                    {/*    disabled*/}
                    {/*/>*/}
                </div>

                {uploadedImages.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                        {uploadedImages.map((image, index) => (
                            <div key={index} className="relative w-24 h-24">
                                <Image
                                    src={image}
                                    alt={`Upload ${index + 1}`}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className="flex flex-col lg:flex-row items-center justify-between pt-4 border-t border-gray-200"
                >
                    <div className="flex items-center gap-4">
                        <div className="relative" ref={emojiRef}>
                            <button
                                onClick={() => setIsEmojiOpen(!isEmojiOpen)}
                                className="text-gray-500 hover:text-gray-700 transition-colors mt-1"
                            >
                                <EmojiIcon />
                            </button>

                            {isEmojiOpen && (
                                <div className="absolute top-full left-0 mt-2 z-10">
                                    <EmojiPicker
                                        onEmojiClick={handleEmojiClick}
                                        width={350}
                                        height={400}
                                        previewConfig={{
                                            showPreview: false,
                                        }}
                                        skinTonesDisabled
                                    />
                                </div>
                            )}
                        </div>

                        <div className="relative" ref={hashtagRef}>
                            <button
                                // onClick={() => setIsHashtagOpen(!isHashtagOpen)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <HashtagIcon />
                            </button>

                            {isHashtagOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10 min-w-[200px]">
                                    <p className="text-xs text-gray-500 font-semibold mb-2 px-2">
                                        POPULAR TAGS
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {popularTags.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() =>
                                                    handleHashtagClick(tag)
                                                }
                                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                                            >
                                                #{tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled
                        />
                        <button
                            // onClick={() => fileInputRef.current?.click()}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <ImageIcon />
                        </button>

                        <div className="relative ml-2" ref={dropdownRef}>
                            <button
                                // onClick={() =>
                                //     setIsDropdownOpen(!isDropdownOpen)
                                // }
                                className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <span className="text-sm font-medium">
                                    {visibility}
                                </span>
                                <ArrowDownIcon />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-10">
                                    {visibilityOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setVisibility(option.label);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                                visibility === option.label
                                                    ? 'text-[#C32033] font-medium'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <button className="w-full lg:w-fit mt-3 lg:mt-0 bg-[#C32033] text-white px-8 py-2 rounded-lg hover:bg-[#a01a2a] transition-colors font-medium">
                        Post
                    </button>
                </div>
            </div>
            <CreateNewPostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button/Button';
import { formatDate } from '@/utils/formatDate';

import SelectArrow from 'public/icons/selectArrow.svg';
import Image from 'next/image';

const name = 'Joe Dohn';
const postedDate = 'now';

export default function CreateCampaign() {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    console.log(previewImage);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    // Watch the content field for live preview
    const watchedContent = watch('campaignContent', '');

    // Function to highlight hashtags
    const renderContentWithHashtags = (text) => {
        if (!text) return null;

        // Split text by hashtags pattern
        const parts = text.split(/(#[a-zA-Zа-яА-ЯёЁ0-9_]+)/g);

        return parts.map((part, index) => {
            // Check if part is a hashtag
            if (part.startsWith('#') && part.length > 1) {
                return (
                    <span key={index} className="text-[#c32033]">
                        {part}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleDateChange = (e) => {
        const formatted = formatDate(e.target.value);
        setValue('executionDate', formatted);
    };

    return (
        <main className={'max-w-[1100px] flex flex-col lg:flex-row gap-3'}>
            <section
                className={
                    'border-[1px] border-[#E6E6E6] rounded-[6px] w-[760px]'
                }
            >
                <div
                    className={
                        'rounded-[8px] border-[1px] border-[#EDEDED] p-6'
                    }
                >
                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="campaignName"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Campaign Name
                            </label>
                            <input
                                id="campaignName"
                                type="text"
                                {...register('campaignName', {
                                    required: 'Campaign name is required',
                                })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter campaign name"
                            />
                            {errors.campaignName && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.campaignName.message}
                                </p>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg">
                            <div
                                className={
                                    'w-full border-b-[#EDEDED] border-b-[1px] p-4'
                                }
                            >
                                <h3 className="text-sm font-semibold text-[#404040]">
                                    Content
                                </h3>
                            </div>

                            <div className={'bg-[#F5F5F5] p-6'}>
                                <div className={'mb-4'}>
                                    <label
                                        htmlFor="campaignImage"
                                        className="block text-sm font-medium text-gray-600 mb-2"
                                    >
                                        Image (Optional)
                                    </label>
                                    <div>
                                        {previewImage && (
                                            <div className={'flex-shrink-0 items-center'}>
                                                <img
                                                    src={previewImage}
                                                    alt="Campaign preview"
                                                    className={
                                                        'w-[256px] h-[160px] object-cover rounded-[8px]'
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 mt-1">
                                        <input
                                            id="campaignImage"
                                            type="file"
                                            accept="image/*"
                                            {...register('campaignImage')}
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="campaignImage"
                                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Choose Image
                                        </label>
                                        {previewImage && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">
                                                    Image selected
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setPreviewImage(null);
                                                        setValue(
                                                            'campaignImage',
                                                            null,
                                                        );
                                                    }}
                                                    className="text-sm text-red-600 hover:text-red-800"
                                                >
                                                    Replace Image
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4 bg-white p-2 rounded-[8px]">
                                    <label
                                        htmlFor="campaignContent"
                                        className="block text-sm font-medium text-gray-600 mb-2"
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        id="campaignContent"
                                        {...register('campaignContent', {
                                            required:
                                                'Campaign content is required',
                                            maxLength: {
                                                value: 500,
                                                message:
                                                    'Content must be less than 500 characters',
                                            },
                                        })}
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Enter your campaign message..."
                                    />
                                    <div className="mt-1 flex justify-between">
                                        <div>
                                            {errors.campaignContent && (
                                                <p className="text-sm text-red-600">
                                                    {
                                                        errors.campaignContent
                                                            .message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {watchedContent.length}/500
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="visibility"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                Who can view
                            </label>
                            <div className="relative">
                                <select
                                    id="visibility"
                                    {...register('visibility', {
                                        required: 'Please select who can view',
                                    })}
                                    onFocus={() => setIsSelectOpen(true)}
                                    onBlur={() => setIsSelectOpen(false)}
                                    className="w-full px-3 py-2 pr-10 border border-[#C2C2C2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                >
                                    <option value="" disabled hidden>
                                        Select visibility
                                    </option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="team">Team only</option>
                                    <option value="organization">
                                        Organization
                                    </option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <SelectArrow
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isSelectOpen ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </div>
                            </div>
                            {errors.visibility && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.visibility.message}
                                </p>
                            )}
                        </div>

                        {/* Execution Date */}
                        <div>
                            <label
                                htmlFor="executionDate"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                When do you want to execute this campaign?
                            </label>
                            <input
                                id="executionDate"
                                type="text"
                                {...register('executionDate', {
                                    required: 'Execution date is required',
                                    pattern: {
                                        value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                                        message:
                                            'Please enter date in DD/MM/YYYY format',
                                    },
                                })}
                                onChange={handleDateChange}
                                maxLength={10}
                                className="w-full px-3 py-2 border border-[#C2C2C2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="DD/MM/YYYY"
                            />
                            {errors.executionDate && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.executionDate.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4">
                            <Button
                                text={'Save Draft'}
                                variant={'secondary'}
                                className={'px-4 py-[10px] text-[14px]'}
                            />
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                text={'Send'}
                                className={'text-[14px] px-4 py-[10px]'}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div
                className={
                    'p-6 rounded-[8px] border-[1px] border-[#EDEDED] w-[328px]'
                }
            >
                <p className={'text-[#404040] text-[14px] font-semibold mb-4'}>
                    Preview Campaign
                </p>
                <div
                    className={
                        'border-[#CCCCCC] border-[1px] rounded-[20px] p-[20px]'
                    }
                >
                    <div className={'flex flex-row gap-4'}>
                        <div>
                            <Image
                                src={'/pictures/mockImages/avatar.png'}
                                height={45}
                                width={45}
                                alt={'avatar'}
                                className={'flex-shrink-0'}
                            />
                        </div>
                        <div>
                            <p className={'font-semibold'}>{name}</p>
                            <p className={'text-[#AAAAAA] text-[14px] mb-3'}>
                                {postedDate}
                            </p>
                        </div>
                    </div>
                    <div className={'flex-1'}>
                        <div className={'flex gap-4 flex-col'}>
                            <div
                                className={`text-[#404040] whitespace-pre-wrap break-words ${previewImage ? 'flex-1' : 'w-full'}`}
                            >
                                {watchedContent ? (
                                    renderContentWithHashtags(watchedContent)
                                ) : (
                                    <span className={'text-[#AAAAAA] italic'}>
                                        Your campaign content will appear
                                        here...
                                    </span>
                                )}
                            </div>
                            {previewImage && (
                                <div className={'flex-shrink-0 items-center'}>
                                    <img
                                        src={previewImage}
                                        alt="Campaign preview"
                                        className={
                                            'w-[300px] h-[250p] object-cover rounded-[8px]'
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

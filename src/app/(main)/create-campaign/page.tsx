'use client';

import { JSX, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/shared/components/Button/Button';
import Checkbox from '@/shared/components/Checkbox/Checkbox';
import { categories } from '@/shared/constants/categories';
import { formatDate } from '@/utils/formatDate';

import InfoIcon from 'public/icons/info.svg';
import SelectArrow from 'public/icons/selectArrow.svg';

const campaignSchema = z
    .object({
        campaignName: z
            .string()
            .min(1, 'Campaign name is required')
            .max(100, 'Campaign name must be less than 100 characters'),

        visibility: z.string().min(1, 'Please select who can view'),

        campaignImage: z
            .any()
            .optional()
            .refine((files) => {
                if (!files || files.length === 0) return true;
                const file = files[0];
                return file.size <= 5 * 1024 * 1024;
            }, 'Image size must be less than 5MB')
            .refine((files) => {
                if (!files || files.length === 0) return true;
                const file = files[0];
                const acceptedFormats = [
                    'image/jpeg',
                    'image/jpg',
                    'image/png',
                    'image/webp',
                ];
                return acceptedFormats.includes(file.type);
            }, 'Only .jpg, .jpeg, .png and .webp formats are supported'),

        category: z.string().min(1, 'Please select a category'),

        campaignContent: z
            .string()
            .min(1, 'Campaign content is required')
            .max(500, 'Content must be less than 500 characters'),

        campaignGoal: z.string().min(1, 'Please select campaign goal'),

        monthlyBudget: z.string().optional(),
        runForFree: z.boolean().optional(),

        targetNumber: z.preprocess(
            (val) => Number(val),
            z
                .number()
                .refine((n) => !isNaN(n), {
                    message: 'Target number must be a valid number',
                })
                .positive({
                    message: 'Target number must be a positive number',
                })
                .max(1_000_000_000, { message: 'Target number is too large' }),
        ) as z.ZodType<number, any, any>,

        startDate: z
            .string()
            .min(1, 'Start date is required')
            .regex(
                /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                'Please enter date in DD/MM/YYYY format',
            )
            .refine((date) => {
                const [day, month, year] = date.split('/').map(Number);
                const dateObj = new Date(year, month - 1, day);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return dateObj >= today;
            }, 'Start date cannot be in the past'),

        endDate: z
            .string()
            .min(1, 'End date is required')
            .regex(
                /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                'Please enter date in DD/MM/YYYY format',
            ),
    })
    .superRefine((data, ctx) => {
        if (data.runForFree === undefined) {
            data.runForFree = false;
        }

        if (!data.runForFree) {
            if (!data.monthlyBudget || data.monthlyBudget.trim() === '') {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        'Monthly budget is required when not running for free',
                    path: ['monthlyBudget'],
                });
            } else {
                const num = Number(data.monthlyBudget);
                if (isNaN(num) || num <= 0) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Monthly budget must be a positive number',
                        path: ['monthlyBudget'],
                    });
                } else if (num > 1000000) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Monthly budget cannot exceed $1,000,000',
                        path: ['monthlyBudget'],
                    });
                }
            }
        } else {
            if (data.monthlyBudget !== '0') {
                data.monthlyBudget = '0';
            }
        }

        if (data.startDate && data.endDate) {
            const [startDay, startMonth, startYear] = data.startDate
                .split('/')
                .map(Number);
            const [endDay, endMonth, endYear] = data.endDate
                .split('/')
                .map(Number);
            const startDate = new Date(startYear, startMonth - 1, startDay);
            const endDate = new Date(endYear, endMonth - 1, endDay);

            if (endDate <= startDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'End date must be after start date',
                    path: ['endDate'],
                });
            }
        }
    });

type CampaignFormData = z.infer<typeof campaignSchema>;

const name = 'Joe Dohn';
const postedDate = 'now';

export default function CreateCampaign(): JSX.Element {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
        trigger,
        clearErrors,
        setError,
        getValues,
    } = useForm<CampaignFormData>({
        resolver: zodResolver(campaignSchema),
        mode: 'onBlur',
        defaultValues: {
            campaignName: '',
            visibility: '',
            campaignContent: '',
            category: '',
            campaignGoal: '',
            monthlyBudget: '',
            targetNumber: 0,
            startDate: '',
            endDate: '',
            runForFree: false,
        },
    });

    const watchedContent = watch('campaignContent', '');
    const watchRunForFree = watch('runForFree');
    useEffect(() => {
        if (watchRunForFree) {
            setValue('monthlyBudget', '0');
            clearErrors('monthlyBudget');
        }
    }, [watchRunForFree, setValue, clearErrors]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('[data-category-dropdown]')) {
                setIsCategoryDropdownOpen(false);
            }
        };

        if (isCategoryDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCategoryDropdownOpen]);

    const renderContentWithHashtags = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(#[a-zA-Zа-яА-ЯёЁ0-9_]+)/g);

        return parts.map((part, index) => {
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

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }

            if (file.size > 3 * 1024 * 1024) {
                alert('Image size must be less than 3MB');
                e.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);

            await trigger('campaignImage');
        } else {
            setPreviewImage(null);
        }
    };

    const onSubmit = async (data: CampaignFormData) => {
        const formValues = getValues();

        const isRunForFree = formValues.runForFree;

        data.runForFree = isRunForFree;

        if (
            !isRunForFree &&
            (!data.monthlyBudget || data.monthlyBudget === '')
        ) {
            setError('monthlyBudget', {
                type: 'manual',
                message: 'Monthly budget is required when not running for free',
            });
            return;
        }

        if (isRunForFree) {
            data.monthlyBudget = '0';
        }

        if (!isRunForFree && data.monthlyBudget) {
            const num = Number(data.monthlyBudget);

            if (isNaN(num) || num <= 0) {
                setError('monthlyBudget', {
                    type: 'manual',
                    message: 'Monthly budget must be a positive number',
                });
                return;
            }

            if (num > 1000000) {
                setError('monthlyBudget', {
                    type: 'manual',
                    message: 'Monthly budget cannot exceed $1,000,000',
                });
                return;
            }
        }

        try {
            console.log('Final form data:', data);
            alert('Campaign created successfully!');
        } catch (error) {
            console.error('Error submitting campaign:', error);
            alert('Failed to create campaign. Please try again.');
        }
    };

    const handleDateChange =
        (field: 'startDate' | 'endDate') =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const formatted = formatDate(e.target.value);
            setValue(field, formatted);

            if (field === 'endDate' && watch('startDate')) {
                trigger(['startDate', 'endDate']);
            }
        };

    const handleCategorySelect = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setValue('category', categoryId);
        setIsCategoryDropdownOpen(false);
        trigger('category');
    };

    return (
        <main className={'flex flex-col lg:flex-row gap-7'}>
            <section className={'border-[1px] border-[#E6E6E6] rounded-xl'}>
                <div className={'p-6'}>
                    <h1 className={'text-[20px]'}>Campaign Details</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 mt-4"
                    >
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
                                {...register('campaignName')}
                                className={`w-full px-3 py-2 border ${
                                    errors.campaignName
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                placeholder="Enter campaign name"
                            />
                            {errors.campaignName && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.campaignName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                Category
                            </label>
                            <div className="relative" data-category-dropdown>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsCategoryDropdownOpen(
                                            !isCategoryDropdownOpen,
                                        )
                                    }
                                    className={`w-full px-3 py-2 pr-10 border ${
                                        errors.category
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left bg-white flex items-center justify-between`}
                                >
                                    <span
                                        className={
                                            selectedCategory
                                                ? 'text-black'
                                                : 'text-gray-500'
                                        }
                                    >
                                        {selectedCategory
                                            ? categories.find(
                                                  (cat) =>
                                                      cat.id ===
                                                      selectedCategory,
                                              )?.name
                                            : 'Choose category'}
                                    </span>
                                    <SelectArrow
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </button>

                                {isCategoryDropdownOpen && (
                                    <div
                                        className="absolute left-0 top-full mt-2 rounded-lg shadow-lg z-10 w-full max-h-[440px] overflow-y-auto"
                                        style={{ background: '#F5F5F5F7' }}
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                            {categories.map((category) => (
                                                <div
                                                    key={category.id}
                                                    className="relative"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleCategorySelect(
                                                                category.id,
                                                            )
                                                        }
                                                        onMouseEnter={() =>
                                                            setHoveredCategory(
                                                                category.id,
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoveredCategory(
                                                                null,
                                                            )
                                                        }
                                                        className={`cursor-pointer flex gap-3 w-full text-left px-4 py-3 hover:bg-white/50 transition-colors ${
                                                            selectedCategory ===
                                                            category.id
                                                                ? 'text-black font-medium'
                                                                : 'text-[#5D5F63]'
                                                        }`}
                                                    >
                                                        {category.icon}{' '}
                                                        {category.name}
                                                    </button>

                                                    {hoveredCategory ===
                                                        category.id &&
                                                        category.tooltip && (
                                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#C5C5C5] text-white text-sm px-3 py-2 rounded-lg shadow-lg z-50 whitespace-normal max-w-[280px]">
                                                                <InfoIcon className="flex-shrink-0 inline-block mr-2" />
                                                                {
                                                                    category.tooltip
                                                                }
                                                            </div>
                                                        )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <input
                                    type="hidden"
                                    {...register('category')}
                                    value={selectedCategory}
                                />
                            </div>
                            {errors.category && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.category.message}
                                </p>
                            )}
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
                                    {...register('visibility')}
                                    onFocus={() => setIsSelectOpen(true)}
                                    onBlur={() => setIsSelectOpen(false)}
                                    className={`w-full px-3 py-2 pr-10 border ${
                                        errors.visibility
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-black`}
                                >
                                    <option value="" disabled>
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

                                    <div className="flex gap-4">
                                        {previewImage && (
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <img
                                                        src={previewImage}
                                                        alt="Campaign preview"
                                                        className="w-[256px] h-fit object-cover rounded-[8px]"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setPreviewImage(
                                                                null,
                                                            );
                                                            setValue(
                                                                'campaignImage',
                                                                null,
                                                            );
                                                        }}
                                                        className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-700 transition-colors"
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            {!previewImage ? (
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-gray-400 transition-colors">
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <svg
                                                            className="w-8 h-8 text-[#C32033]"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                            />
                                                        </svg>
                                                        <div className="text-sm">
                                                            <label
                                                                htmlFor="campaignImage"
                                                                className="text-[#C32033] font-medium cursor-pointer hover:text-red-600"
                                                            >
                                                                Link
                                                            </label>
                                                            <span className="text-gray-600">
                                                                {' '}
                                                                or drag image
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-500">
                                                            PDF, PNG or JPG
                                                            (max. 3MB)
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white">
                                                    <div className="text-center">
                                                        <div className="text-sm text-gray-600 mb-2">
                                                            Image selected
                                                        </div>
                                                        <div className="flex justify-center gap-2">
                                                            <label
                                                                htmlFor="campaignImage"
                                                                className="text-sm text-red-600 hover:text-red-800 cursor-pointer"
                                                            >
                                                                Replace Image
                                                            </label>
                                                            <span className="text-gray-400">
                                                                |
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setPreviewImage(
                                                                        null,
                                                                    );
                                                                    setValue(
                                                                        'campaignImage',
                                                                        null,
                                                                    );
                                                                }}
                                                                className="text-sm text-red-600 hover:text-red-800"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <input
                                        id="campaignImage"
                                        type="file"
                                        accept="image/*"
                                        {...register('campaignImage')}
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
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
                                        {...register('campaignContent')}
                                        rows={4}
                                        className={`w-full px-3 py-2 border ${
                                            errors.campaignContent
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
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

                        <h2 className={'text-[20px]'}>
                            Campaign Goals & Budget
                        </h2>

                        <div>
                            <label
                                htmlFor="campaignGoal"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                Campaign Goal
                            </label>
                            <div className="relative">
                                <select
                                    id="campaignGoal"
                                    {...register('campaignGoal')}
                                    onFocus={() => setIsSelectOpen(true)}
                                    onBlur={() => setIsSelectOpen(false)}
                                    className={`w-full px-3 py-2 pr-10 border ${
                                        errors.campaignGoal
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-black`}
                                >
                                    <option value="" disabled>
                                        Select campaign goal
                                    </option>
                                    <option value="goal1">
                                        Increase brand awareness
                                    </option>
                                    <option value="goal2">
                                        Generate leads
                                    </option>
                                    <option value="goal3">
                                        Drive website traffic
                                    </option>
                                    <option value="goal4">Boost sales</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <SelectArrow
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isSelectOpen ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </div>
                            </div>
                            {errors.campaignGoal && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.campaignGoal.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="monthlyBudget"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                Monthly Budget (USD)
                            </label>
                            <div className="relative">
                                <input
                                    {...register('monthlyBudget')}
                                    type="number"
                                    placeholder={'Enter Monthly budget'}
                                    readOnly={watchRunForFree}
                                    className={`w-full px-3 py-2 pr-12 border ${
                                        errors.monthlyBudget
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        watchRunForFree
                                            ? 'bg-gray-100 text-gray-500'
                                            : ''
                                    }`}
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#404040] text-sm font-medium">
                                    USD
                                </span>
                            </div>
                            {errors.monthlyBudget && !watchRunForFree && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.monthlyBudget.message}
                                </p>
                            )}
                            <div
                                className={'rounded-[12px] px-3 py-2 mt-3'}
                                style={{
                                    boxShadow: '0px 4px 12px 0px #0000001F',
                                }}
                            >
                                <div className={'flex items-center gap-2 mt-2'}>
                                    <Checkbox
                                        label=""
                                        registration={register('runForFree')}
                                    />
                                    <p className={'font-semibold'}>
                                        Run this campaign for free
                                    </p>
                                </div>
                                <div
                                    className={
                                        'flex items-center flex-row gap-3 mt-1'
                                    }
                                >
                                    <div>
                                        <InfoIcon />
                                    </div>
                                    <p className={'text-[12px] text-[#AAAAAA]'}>
                                        Free campaigns run for up to 30 days and
                                        have a fixed budget of $0. You can
                                        re-submit this campaign again once it
                                        ends.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="targetNumber"
                                className="block text-sm font-semibold text-[#404040] mb-4"
                            >
                                Target Number
                            </label>
                            <input
                                {...register('targetNumber')}
                                type="number"
                                placeholder={'Enter target number'}
                                className={`w-full px-3 py-2 border ${
                                    errors.targetNumber
                                        ? 'border-red-500'
                                        : 'border-[#C2C2C2]'
                                } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            <p className="mt-1 text-sm text-red-600">
                                {errors.targetNumber
                                    ? String(errors.targetNumber.message)
                                    : null}
                            </p>
                            <div className={'flex items-center gap-3 mt-2'}>
                                <div>
                                    <InfoIcon />
                                </div>
                                <p className={'text-[12px] text-[#AAAAAA]'}>
                                    The number of users you aim to reach during
                                    the campaign. This helps the system optimize
                                    delivery.
                                </p>
                            </div>
                        </div>

                        <h2 className={'text-[20px]'}>Campaign Duration</h2>

                        <div
                            className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}
                        >
                            <div>
                                <label
                                    htmlFor="startDate"
                                    className="block text-sm font-semibold text-[#404040] mb-4"
                                >
                                    Start Date
                                </label>
                                <input
                                    id="startDate"
                                    type="text"
                                    {...register('startDate')}
                                    onChange={handleDateChange('startDate')}
                                    maxLength={10}
                                    className={`w-full px-3 py-2 border ${
                                        errors.startDate
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="DD/MM/YYYY"
                                />
                                {errors.startDate && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.startDate.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="endDate"
                                    className="block text-sm font-semibold text-[#404040] mb-4"
                                >
                                    End Date
                                </label>
                                <input
                                    id="endDate"
                                    type="text"
                                    {...register('endDate')}
                                    onChange={handleDateChange('endDate')}
                                    maxLength={10}
                                    className={`w-full px-3 py-2 border ${
                                        errors.endDate
                                            ? 'border-red-500'
                                            : 'border-[#C2C2C2]'
                                    } rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                    placeholder="DD/MM/YYYY"
                                />
                                {errors.endDate && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.endDate.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                text={'Save Draft'}
                                variant={'secondary'}
                                className={'px-4 py-[10px] text-[14px]'}
                            />
                            <Button
                                type="submit"
                                text={isSubmitting ? 'Sending...' : 'Send'}
                                disabled={isSubmitting}
                                className={`text-[14px] px-4 py-[10px] ${
                                    isSubmitting
                                        ? 'opacity-50 cursor-not-allowed'
                                        : ''
                                }`}
                            />
                        </div>
                    </form>
                </div>
            </section>

            <div
                className={
                    'p-6 rounded-[8px] border-[1px] border-[#EDEDED] h-fit'
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
                                            'w-[300px] h-fit object-cover rounded-[8px]'
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

'use client';

import { JSX, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';

import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import PhoneInput from '@/shared/components/PhoneInput';
import CustomSelect from '@/shared/components/Select/Select';
import AvatarUpload from '@/shared/components/Settings/AvatarUpload';
import { countries } from '@/shared/constants/countries';

import EditIcon from 'public/icons/edit.svg';

const accountDetailsSchema = z.object({
    firstName: z
        .string()
        .min(1, 'First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'First name can only contain letters and spaces',
        ),

    lastName: z
        .string()
        .min(1, 'Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Last name can only contain letters and spaces',
        ),

    username: z
        .string()
        .min(1, 'Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be less than 20 characters')
        .regex(
            /^[a-zA-Z0-9_]+$/,
            'Username can only contain letters, numbers, and underscores',
        )
        .refine(
            (val) => !val.startsWith('_'),
            'Username cannot start with underscore',
        )
        .refine(
            (val) => !val.endsWith('_'),
            'Username cannot end with underscore',
        ),

    phone: z
        .string()
        .min(1, 'Phone number is required')
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^\d+$/, 'Phone number can only contain digits'),

    country: z
        .string()
        .min(1, 'Please select a country')
        .refine(
            (val) => countries.some((country) => country.value === val),
            'Please select a valid country',
        ),

    avatar: z.instanceof(File).optional().or(z.string().optional()),
});

type AccountDetailsFormData = z.infer<typeof accountDetailsSchema>;

export default function AccountDetails(): JSX.Element {
    const [userAvatar, setUserAvatar] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors, isValid, isDirty },
    } = useForm<AccountDetailsFormData>({
        resolver: zodResolver(accountDetailsSchema),
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            username: '',
            phone: '',
            country: '',
        },
    });

    const handleAvatarChange = (file: File | null) => {
        if (file) {
            console.log('New avatar file:', file.name);
        } else {
            console.log('Avatar removed');
            setUserAvatar(null);
        }
    };

    const onSubmit = (data: AccountDetailsFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div
                className={
                    'flex justify-between items-center flex-col lg:flex-row'
                }
            >
                <h2 className={'text-[20px] font-semibold'}>Account Details</h2>
                <Button
                    text={'Edit Profile'}
                    icon={<EditIcon />}
                    variant={'link'}
                    className={'!text-[#202020]'}
                />
            </div>
            <div
                className={
                    'flex justify-between items-center flex-col lg:flex-row'
                }
            >
                <p className="w-full  lg:text-left lg:w-[20%]">Avatar</p>
                <AvatarUpload
                    currentAvatar={userAvatar}
                    onAvatarChange={handleAvatarChange}
                />
            </div>
            <div className={'flex flex-col lg:flex-row gap-3'}>
                <p className="w-full lg:w-[40%] whitespace-nowrap">Full Name</p>
                <Input
                    placeholder="First name"
                    registration={register('firstName')}
                    error={errors.firstName}
                />
                <Input
                    placeholder="Last name"
                    registration={register('lastName')}
                    error={errors.lastName}
                />
            </div>
            <div className={'flex flex-col lg:flex-row gap-3 items-center'}>
                <p className="w-full lg:w-[20%]">Username</p>
                <Input
                    placeholder="Enter username"
                    registration={register('username')}
                    error={errors.username}
                />
            </div>
            <div className={'flex flex-col lg:flex-row gap-3 items-center'}>
                <p className="w-full lg:w-[20%]">Contact phone</p>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <PhoneInput
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={error}
                            countryCode="+1"
                            format="US"
                            placeholder="Phone number"
                        />
                    )}
                />
            </div>
            <div className={'flex flex-col lg:flex-row gap-3 items-center'}>
                <p className="w-full lg:w-[20%]">Country</p>
                <CustomSelect
                    placeholder="Select a country"
                    options={countries}
                    registration={register('country')}
                    error={errors.country}
                />
            </div>
            <Button text={'Submit'} type={'submit'} />
        </form>
    );
}

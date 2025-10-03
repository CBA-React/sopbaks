'use client';

import React, { JSX, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useChangePassword } from '@/api/auth/hooks/useChangePassword';
import { EyeClose } from '@/shared/components/EyeIcon/EyeClose';
import { EyeOpen } from '@/shared/components/EyeIcon/EyeOpen';

interface NewPasswordFormData {
    password: string;
    confirmPassword: string;
}

export default function NewPasswordForm(): JSX.Element {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [code, setCode] = useState<string>('');

    const router = useRouter();
    const { mutate: changePassword, isPending } = useChangePassword();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<NewPasswordFormData>({
        mode: 'onBlur',
    });

    const password = watch('password');

    useEffect(() => {
        const savedEmail = sessionStorage.getItem('resetEmail');
        const savedCode = sessionStorage.getItem('resetCode');

        if (!savedEmail || !savedCode) {
            toast.error('Session expired. Please start over.');
            router.push('/forgot-password');
            return;
        }

        setEmail(savedEmail);
        setCode(savedCode);
    }, [router]);

    const onSubmit = (data: NewPasswordFormData): void => {
        if (!email || !code) {
            toast.error('Session data missing. Please start over.');
            router.push('/forgot-password');
            return;
        }

        changePassword({
            email,
            password_1: data.password,
            password_2: data.confirmPassword,
            code,
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <div>
                <h2 className="text-[32px] font-bold">Create New Password</h2>
                <p className="text-sm mb-6">
                    Your new password must be different from previous used
                    passwords.
                </p>
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message:
                                    'Password must be at least 8 characters',
                            },
                            maxLength: {
                                value: 64,
                                message:
                                    'Password must not exceed 64 characters',
                            },
                            validate: {
                                hasNumber: (value) =>
                                    /\d/.test(value) ||
                                    'Password must contain at least one number',
                                hasUpperCase: (value) =>
                                    /[A-Z]/.test(value) ||
                                    'Password must contain at least one uppercase letter',
                                hasLowerCase: (value) =>
                                    /[a-z]/.test(value) ||
                                    'Password must contain at least one lowercase letter',
                                noSpecialChars: (value) =>
                                    /^[A-Za-z0-9]+$/.test(value) ||
                                    'Password must contain only letters and numbers',
                            },
                        })}
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <EyeClose className="w-5 h-5" />
                        ) : (
                            <EyeOpen className="w-5 h-5" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Confirm Password</label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm new password"
                        {...register('confirmPassword', {
                            required: 'Password confirmation is required',
                            validate: (value) =>
                                value === password || 'Passwords do not match',
                        })}
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showConfirmPassword ? (
                            <EyeClose className="w-5 h-5" />
                        ) : (
                            <EyeOpen className="w-5 h-5" />
                        )}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#C32033] text-white py-3 rounded-[10px] font-medium cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {isPending ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
}

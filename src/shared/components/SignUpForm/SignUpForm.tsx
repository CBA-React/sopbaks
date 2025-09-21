'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Checkbox from '@/shared/components/Checkbox/Checkbox';
import { EyeClose } from '@/shared/components/EyeIcon/EyeClose';
import { EyeOpen } from '@/shared/components/EyeIcon/EyeOpen';

interface SignUpFormData {
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

export default function SignInForm(): JSX.Element {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
    });

    const password = watch('password');

    const onSubmit = (data: SignUpFormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <h2 className="text-[32px] font-bold">Sign Up</h2>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Email</label>
                <input
                    placeholder="Enter your Email"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                        },
                    })}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Password</label>
                <div className="relative">
                    <input
                        placeholder="Enter your password"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password must be at least 6 characters',
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
                        placeholder="Confirm your password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: 'Please confirm your password',
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

            <div className="flex items-start space-x-3">
                <Checkbox
                    label={
                        <>
                            I agree to the{' '}
                            <a
                                href="/privacy"
                                className="text-[#C32033] font-semibold"
                            >
                                Terms of Service
                            </a>
                            .
                        </>
                    }
                    registration={register('terms', {
                        required: 'You must accept the terms of use',
                    })}
                    error={errors.terms}
                />
            </div>

            <div className="flex flex-col">
                <Link
                    href="/forgot-password"
                    className="text-[#C32033] text-sm hover:underline self-end mb-4"
                >
                    Forgot password?
                </Link>

                <button
                    type="submit"
                    className="w-full bg-[#C32033] text-white py-2 rounded-[10px] font-medium cursor-pointer"
                >
                    Sign Up
                </button>
            </div>

            <p className="text-center">
                Already have an account?{' '}
                <Link href="/sign-in" className="text-[#C32033]">
                    Sign In
                </Link>
            </p>
        </form>
    );
}

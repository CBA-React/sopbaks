'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

interface LoginFormData {
    email: string;
    password: string;
};

export default function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: LoginFormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <h2 className="text-[32px] font-bold">Sign In</h2>

            {/* Email */}
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Email</label>
                <input
                    placeholder='Enter your Email'
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

            {/* Password */}
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Password</label>
                <input
                    placeholder='Enter your password'
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                    })}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                    </p>
                )}

                {/* Forgot Password Link */}
                <Link
                    href="/forgot-password"
                    className="text-[#C32033] text-sm mt-2 hover:underline self-end"
                >
                    Forgot password?
                </Link>
            </div>

            <button
                type="submit"
                className="w-full bg-[#C32033] text-white py-2 rounded-[10px] font-medium cursor-pointer"
            >
                Sign In
            </button>
            <p className={'text-center'}>
                Don’t have an account?{' '}
                <Link href={'/sign-up'} className={'text-[#C32033]'}>
                    Sign Up
                </Link>
            </p>
        </form>
    );
}
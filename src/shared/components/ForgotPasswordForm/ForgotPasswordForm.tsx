'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface ForgotPasswordFormData {
    email: string;
}

export default function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: ForgotPasswordFormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <div>
                <h2 className="text-[32px] font-bold">Reset Password</h2>

                <p className="text-sm mb-6">
                    Enter the email address associated with your account and
                    we’ll send you a link to reset your password.
                </p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
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

            <button
                type="submit"
                className="w-full bg-[#C32033] text-white py-3 rounded-[10px] font-medium cursor-pointer"
            >
                Send Reset Link
            </button>
            <p className={'text-center'}>
                Didn’t get the email?{' '}
                <span className={'text-[#C32033] cursor-pointer'}>
                    Send Again
                </span>
            </p>
        </form>
    );
}

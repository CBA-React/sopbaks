'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: RegisterFormData) => {
        console.log('Form submitted:', data);
    };

    const password = watch('password', '');

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <h2 className="text-[32px] font-bold">Sign Up</h2>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Email</label>
                <input
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
                <input
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                        },
                    })}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col">
                <label className="mb-1 font-medium">Confirm Password</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                            value === password || 'Passwords do not match',
                    })}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    {...register('terms', {
                        required: 'You must accept the terms of use',
                    })}
                    className="w-4 h-4 text-[#C32033] focus:ring-[#C32033] focus:ring-2 accent-[#C32033] appearance-none border-[1px] border-[#C32033] rounded-sm bg-white checked:bg-[#C32033] checked:border-[#C32033] relative"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L6 9.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e\")",
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <label className="text-sm">
                    I accept to the{' '}
                    <a href="/terms" className="text-[#C32033]" target="_blank">
                        Terms of Use
                    </a>
                </label>
            </div>
            {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            <button
                type="submit"
                className="w-full bg-[#C32033] text-white py-2 rounded-[10px] font-medium cursor-pointer"
            >
                Register
            </button>
        </form>
    );
}

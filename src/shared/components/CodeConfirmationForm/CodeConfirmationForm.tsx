'use client';

import React, { JSX, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useResetPassword } from '@/api/auth/hooks/useResetPassword';
import { useVerifyResetCode } from '@/api/auth/hooks/useVerifyResetCode';
import { OTP } from '@/shared/components/OTP/OTP';

export default function CodeConfirmationForm(): JSX.Element {
    const [otp, setOTP] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const { mutate: verifyCode, isPending } = useVerifyResetCode();
    const { mutate: resendCode, isPending: isResending } = useResetPassword();

    useEffect(() => {
        const savedEmail = sessionStorage.getItem('resetEmail');
        if (!savedEmail) {
            toast.error('Email not found. Please start over.');
            router.push('/forgot-password');
            return;
        }
        setEmail(savedEmail);
    }, [router]);

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (!email || !otp) {
            toast.error('Please enter the verification code');
            return;
        }

        verifyCode({ email, code: otp });
    };

    const handleSendAgain = (): void => {
        if (email) {
            resendCode({ email });
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            className="max-w-[560px] w-full mx-auto bg-white space-y-6"
        >
            <div>
                <h2 className="text-[32px] font-bold">Verify Code</h2>
                <p className="text-sm mb-6">
                    Enter the verification code sent to {email || 'your email'}
                </p>
            </div>
            <OTP value={otp} onChange={setOTP} />
            <button
                type="submit"
                className="w-full bg-[#C32033] text-white py-3 rounded-[10px] font-medium cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!otp || otp.length < 6 || isPending}
            >
                {isPending ? 'Verifying...' : 'Verify Code'}
            </button>

            <p className="text-center">
                Didn&#39;t receive a code?{' '}
                <button
                    type="button"
                    onClick={handleSendAgain}
                    disabled={isResending}
                    className="text-[#C32033] cursor-pointer hover:underline disabled:opacity-50"
                >
                    {isResending ? 'Sending...' : 'Send Again'}
                </button>
            </p>
        </form>
    );
}

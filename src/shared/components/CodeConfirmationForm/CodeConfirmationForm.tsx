'use client';

import React, { JSX } from 'react';

import { OTP } from '@/shared/components/OTP/OTP';

export default function CodeConfirmationForm(): JSX.Element {
    const [otp, setOTP] = React.useState<string>('');
    const onSubmit = () => {
        console.log('Form submitted:');
    };

    return (
        <form className="max-w-[560px] w-full mx-auto bg-white space-y-6">
            <div>
                <h2 className="text-[32px] font-bold">Reset Password</h2>

                <p className="text-sm mb-6">
                    Enter the email address associated with your account and
                    we’ll send you a link to reset your password.
                </p>
            </div>
            <OTP value={otp} onChange={setOTP} />
            <button
                type="submit"
                className="w-full bg-[#C32033] text-white py-3 rounded-[10px] font-medium cursor-pointer"
                disabled={!otp}
            >
                Create New Password
            </button>
            <p className={'text-center'}>
                Didn’t receive a code?{' '}
                <span className={'text-[#C32033] cursor-pointer'}>
                    Send Again
                </span>
            </p>
        </form>
    );
}

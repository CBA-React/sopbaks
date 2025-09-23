import { JSX } from 'react';

import Button from '@/shared/components/Button/Button';

import ProtectedIcon from 'public/icons/protected.svg';

export default function TwoFactorAuthorization(): JSX.Element {
    return (
        <div
            className={
                'bg-[#F9F9F9] rounded-[8px] p-6 flex flex-col lg:flex-row items-center gap-4 mt-6'
            }
        >
            <div className="flex-shrink-0 self-start">
                <ProtectedIcon />
            </div>
            <div className="flex-1">
                <p>Secure Your Account</p>
                <p className={'text-[#5A5A5A]'}>
                    Two-factor authentication adds an extra layer of security to
                    your account. To log in, in addition you&#39;ll need to
                    provide a digit code
                </p>
            </div>
            <div className="flex-shrink-0">
                <Button text={'Enable'} />
            </div>
        </div>
    );
}

import { JSX } from 'react';

import Button from '@/shared/components/Button/Button';
import TwoFactorAuthorization from '@/shared/components/Settings/TwoFactorAuthorization';

export default function SecurityAndLogin(): JSX.Element {
    return (
        <>
            <div className={'w-full'}>
                <h2 className={'text-[20px] font-semibold'}>
                    Security & Login
                </h2>
                <div
                    className={'flex flex-col lg:flex-row justify-between mt-8'}
                >
                    <div>
                        <p>Email Address</p>
                        <p className={'text-[#898989] text-[14px]'}>
                            eureka88@email.com
                        </p>
                    </div>
                    <div>
                        <Button text={'Change Email'} variant={'secondary'} />
                    </div>
                </div>
                <div
                    className={'flex flex-col lg:flex-row justify-between mt-4'}
                >
                    <div>
                        <p>Password</p>
                        <p className={'text-[#898989] text-[14px]'}>
                            ******************
                        </p>
                    </div>
                    <div>
                        <Button
                            text={'Change password'}
                            variant={'secondary'}
                        />
                    </div>
                </div>
            </div>
            <TwoFactorAuthorization />
        </>
    );
}

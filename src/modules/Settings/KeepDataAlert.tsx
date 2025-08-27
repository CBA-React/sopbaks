import { JSX } from 'react';

import LockIcon from '../../../public/icons/lock.svg';

export default function KeepDataAlert(): JSX.Element {
    return (
        <div className={'flex flex-row w-full'}>
            <div
                className={
                    'bg-[#CFD8DC] w-[40px] flex justify-center items-center '
                }
            >
                <LockIcon />
            </div>
            <div className={'bg-[#ECF5F9] px-4 py-3 w-full'}>
                <p className={'text-[12px] text-[#5D5F63] font-semibold'}>
                    We keep your data private and never share it with
                    third-parties.
                </p>
            </div>
        </div>
    );
}

import { JSX } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
    avatar: string;
    fullName: string;
    updatedAt: string;
    onlineStatus?: string | undefined;
}

export default function FollowedChannel({
    avatar,
    fullName,
    updatedAt,
    onlineStatus,
}: Props): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="relative w-[80px] h-[80px]">
                <div className="absolute inset-0 rounded-full border-4 border-gray-300" />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                        src={avatar}
                        alt={fullName}
                        fill
                        className="object-cover"
                    />
                </div>

                {onlineStatus && (
                    <div
                        className={clsx(
                            'absolute top-0 right-2 w-5 h-5 rounded-full border-2 border-white',
                            {
                                'bg-[#7CC54F]': onlineStatus === 'online',
                                'bg-[#C32033]': onlineStatus === 'streaming',
                            },
                        )}
                    />
                )}
            </div>

            <p className="font-semibold text-center">{fullName}</p>
            <p className="text-sm text-gray-500">{updatedAt}</p>
        </div>
    );
}
